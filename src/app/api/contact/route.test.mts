import assert from "node:assert/strict"
import { beforeEach, describe, it, mock } from "node:test"

const routePath = "./route.ts"
const { POST } = await import(routePath)

const valid = { name: "Test", email: "test@example.com", projectType: "Website", message: "Hello" }
let ip = 0
let fetchMock: ReturnType<typeof mock.fn>

function post(body: unknown, address = `10.0.0.${++ip}`): Promise<Response> {
  return POST(
    new Request("http://localhost/api/contact", {
      method: "POST",
      headers: { "x-forwarded-for": address },
      body: typeof body === "string" ? body : JSON.stringify(body),
    })
  )
}

describe("POST /api/contact", () => {
  beforeEach(() => {
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
})
