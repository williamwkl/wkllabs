import assert from "node:assert/strict"
import { describe, it } from "node:test"

const appsPath = "./apps.ts"
const { storeUrlFor } = await import(appsPath)

const app = { name: "Test", appStoreUrl: "apple", playStoreUrl: "google" }

describe("storeUrlFor", () => {
  it("sends iPhones and iPads to the App Store", () => {
    assert.equal(storeUrlFor(app, "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X)"), "apple")
    assert.equal(storeUrlFor(app, "Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X)"), "apple")
  })

  it("sends Android phones to Google Play", () => {
    assert.equal(storeUrlFor(app, "Mozilla/5.0 (Linux; Android 14; Pixel 8)"), "google")
  })

  it("leaves computers on the page", () => {
    assert.equal(storeUrlFor(app, "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"), undefined)
    assert.equal(storeUrlFor(app, ""), undefined)
  })

  it("leaves Android visitors on the page when there is no Android app", () => {
    assert.equal(storeUrlFor({ name: "iOS only", appStoreUrl: "apple" }, "Linux; Android 14"), undefined)
  })
})
