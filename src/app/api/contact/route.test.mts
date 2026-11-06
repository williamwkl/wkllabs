import assert from "node:assert/strict"
import { beforeEach, describe, it, mock } from "node:test"

const routePath = "./route.ts"
const { POST, resetContactLimitsForTests } = await import(routePath)

const valid = { name: "Test", email: "test@example.com", projectType: "Website", message: "Hello" }
let ip = 0
let fetchMock: ReturnType<typeof mock.fn>

function post(body: unknown, address = `10.0.0.${++ip}`, headers: Record<string, string> = {}): Promise<Response> {
  return POST(
    new Request("http://localhost/api/contact", {
      method: "POST",
      headers: { "x-forwarded-for": address, ...headers },
      body: typeof body === "string" ? body : JSON.stringify(body),
    })
  )
}

describe("POST /api/contact", () => {
  beforeEach(() => {
    resetContactLimitsForTests()
    delete process.env.TURNSTILE_SECRET_KEY
    process.env.RESEND_API_KEY = "test-key"
    process.env.CONTACT_FROM_EMAIL = "WKL Labs <hello@wkllabs.com>"
    fetchMock = mock.fn(async () => new Response("{}", { status: 200 }))
    globalThis.fetch = fetchMock as unknown as typeof fetch
  })

  it("sends a valid enquiry with the visitor as reply-to", async () => {
    assert.equal((await post(valid)).status, 200)
    const init = fetchMock.mock.calls[0].arguments[1] as RequestInit
    const sent = JSON.parse(String(init.body))
    assert.equal(sent.reply_to, valid.email)
    assert.match(sent.subject, /Website/)
  })

  it("sends the visitor a confirmation without any form data", async () => {
    const email = "confirm@example.com"
    const res = await post({ ...valid, email, name: "Visit spam.example", message: "Buy now" })
    assert.equal(res.status, 200)
    assert.equal(fetchMock.mock.callCount(), 2)
    const init = fetchMock.mock.calls[1].arguments[1] as RequestInit
    const sent = JSON.parse(String(init.body))
    assert.equal(sent.to, email)
    assert.equal(sent.reply_to, "hello@wkllabs.com")
    assert.equal(sent.subject, "We received your message")
    assert.equal(sent.headers["Auto-Submitted"], "auto-generated")
    assert.match(sent.text, /within one business day/)
    assert.doesNotMatch(JSON.stringify(sent), /spam\.example|Buy now/)
  })

  it("confirms to one address only once per window", async () => {
    await post({ ...valid, email: "Repeat@example.com" })
    await post({ ...valid, email: "repeat@example.com" })
    assert.equal(fetchMock.mock.callCount(), 3)
  })

  for (const [name, confirm] of [
    ["returns an error", async () => new Response("{}", { status: 500 })],
    ["throws", async () => { throw new Error("network") }],
  ] as const) {
    it(`still succeeds when the confirmation ${name}`, async () => {
      let calls = 0
      globalThis.fetch = (async () => (++calls === 1 ? new Response("{}") : confirm())) as typeof fetch
      assert.equal((await post({ ...valid, email: `fail-${calls}-${name.length}@example.com` })).status, 200)
      assert.equal(calls, 2)
    })
  }

  it("returns 503 without sending when not configured", async () => {
    delete process.env.CONTACT_FROM_EMAIL
    assert.equal((await post(valid)).status, 503)
    assert.equal(fetchMock.mock.callCount(), 0)
  })

  for (const [name, body] of [
    ["bad email", { ...valid, email: "nope" }],
    ["display-name email", { ...valid, email: "x<a@b.co>" }],
    ["missing name", { ...valid, name: " " }],
    ["unknown project type", { ...valid, projectType: "Other stuff" }],
    ["long message", { ...valid, message: "x".repeat(5001) }],
    ["malformed JSON", "{"],
  ] as const) {
    it(`rejects ${name}`, async () => {
      assert.equal((await post(body)).status, 400)
      assert.equal(fetchMock.mock.callCount(), 0)
    })
  }

  it("silently drops honeypot submissions", async () => {
    assert.equal((await post({ ...valid, website: "spam" })).status, 200)
    assert.equal(fetchMock.mock.callCount(), 0)
  })

  it("reports failure when the email provider fails", async () => {
    fetchMock = mock.fn(async () => new Response("{}", { status: 500 }))
    globalThis.fetch = fetchMock as unknown as typeof fetch
    assert.equal((await post({ ...valid, email: "down@example.com" })).status, 502)
    assert.equal(fetchMock.mock.callCount(), 1)
  })

  it("rate limits repeated requests from one address", async () => {
    for (let i = 0; i < 5; i++) assert.equal((await post(valid, "10.9.9.9")).status, 200)
    assert.equal((await post(valid, "10.9.9.9")).status, 429)
  })

  it("ignores a client-chosen X-Forwarded-For when Cloudflare names the client", async () => {
    for (let i = 0; i < 5; i++) {
      assert.equal((await post({ ...valid, email: `cf${i}@example.com` }, `1.1.1.${i}, 10.8.8.8`, { "cf-connecting-ip": "10.7.7.7" })).status, 200)
    }
    assert.equal((await post(valid, "1.1.1.99, 10.8.8.8", { "cf-connecting-ip": "10.7.7.7" })).status, 429)
  })

  it("uses the proxy-added X-Forwarded-For entry, not the first one", async () => {
    for (let i = 0; i < 5; i++) {
      assert.equal((await post({ ...valid, email: `xff${i}@example.com` }, `2.2.2.${i}, 10.6.6.6`)).status, 200)
    }
    assert.equal((await post(valid, "2.2.2.99, 10.6.6.6")).status, 429)
  })

  it("returns JSON when the email provider cannot be reached", async () => {
    globalThis.fetch = (async () => { throw new Error("network") }) as typeof fetch
    const res = await post({ ...valid, email: "unreachable@example.com" })
    assert.equal(res.status, 502)
    assert.match((await res.json()).error, /email us directly/)
  })

  it("caps total sends per hour across rotating addresses", async () => {
    for (let i = 0; i < 30; i++) assert.equal((await post({ ...valid, email: `cap${i}@example.com` })).status, 200)
    const blocked = await post({ ...valid, email: "cap-over@example.com" })
    assert.equal(blocked.status, 429)
    assert.match((await blocked.json()).error, /email us directly/)
    assert.equal((await post({ ...valid, website: "bot" })).status, 200)
  })

  it("does not count a rejected send against the hourly cap", async () => {
    globalThis.fetch = (async () => new Response("{}", { status: 422 })) as typeof fetch
    for (let i = 0; i < 31; i++) assert.equal((await post({ ...valid, email: `retry${i}@example.com` })).status, 502)
    globalThis.fetch = (async () => new Response("{}")) as typeof fetch
    assert.equal((await post({ ...valid, email: "after-outage@example.com" })).status, 200)
  })

  for (const [name, failure] of [
    ["server error", async () => new Response("{}", { status: 503 })],
    ["timeout", async () => { throw new Error("timeout") }],
  ] as const) {
    it(`counts an uncertain ${name} against the cap and asks the visitor to email`, async () => {
      globalThis.fetch = failure as typeof fetch
      for (let i = 0; i < 30; i++) {
        const res = await post({ ...valid, email: `unsure${i}@example.com` })
        assert.equal(res.status, 502)
        assert.match((await res.json()).error, /email us directly/)
      }
      assert.equal((await post({ ...valid, email: "unsure-over@example.com" })).status, 429)
    })
  }

  it("rejects oversized bodies without reading them fully", async () => {
    const big = JSON.stringify({ ...valid, message: "x".repeat(30_000) })
    assert.equal((await post(big)).status, 413)
    assert.equal((await post(big, undefined, { "content-length": String(big.length) })).status, 413)
    assert.equal(fetchMock.mock.callCount(), 0)
  })

  it("rejects JSON that is not an object", async () => {
    assert.equal((await post("[1]")).status, 400)
    assert.equal((await post("null")).status, 400)
  })

  it("allows a later confirmation when Resend rejected the first", async () => {
    let calls = 0
    globalThis.fetch = (async () => (++calls === 2 ? new Response("{}", { status: 422 }) : new Response("{}"))) as typeof fetch
    await post({ ...valid, email: "again@example.com" })
    await post({ ...valid, email: "again@example.com" })
    assert.equal(calls, 4)
  })

  describe("with Turnstile enabled", () => {
    beforeEach(() => {
      process.env.TURNSTILE_SECRET_KEY = "secret"
    })

    function verifier(success: boolean | "throw") {
      const calls: string[] = []
      globalThis.fetch = (async (url: string | URL, init?: RequestInit) => {
        calls.push(String(url))
        if (String(url).includes("siteverify")) {
          if (success === "throw") throw new Error("down")
          assert.match(String(init?.body), /response=tok/)
          return Response.json({ success })
        }
        return new Response("{}")
      }) as typeof fetch
      return calls
    }

    it("sends when the check passes", async () => {
      const calls = verifier(true)
      assert.equal((await post({ ...valid, "cf-turnstile-response": "tok" })).status, 200)
      assert.equal(calls.filter((u) => u.includes("resend")).length, 2)
    })

    it("blocks a missing or failed check without sending", async () => {
      const calls = verifier(false)
      assert.equal((await post(valid)).status, 400)
      assert.equal((await post({ ...valid, "cf-turnstile-response": "tok" })).status, 400)
      assert.equal(calls.filter((u) => u.includes("resend")).length, 0)
    })

    it("asks the visitor to email when the check cannot run", async () => {
      verifier("throw")
      const res = await post({ ...valid, "cf-turnstile-response": "tok" })
      assert.equal(res.status, 503)
      assert.match((await res.json()).error, /email us directly/)
    })
  })
})
