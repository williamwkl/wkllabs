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
    globalThis.fetch = (async () => new Response("{}", { status: 500 })) as typeof fetch
    assert.equal((await post(valid)).status, 502)
  })

  it("rate limits repeated requests from one address", async () => {
    for (let i = 0; i < 5; i++) assert.equal((await post(valid, "10.9.9.9")).status, 200)
    assert.equal((await post(valid, "10.9.9.9")).status, 429)
  })
})
