export interface StoreApp {
  name: string
  /** Country-free, so Apple opens the visitor's own storefront. */
  appStoreUrl?: string
  playStoreUrl?: string
}

export const nabbeeApp: StoreApp = {
  name: "Nabbee",
  appStoreUrl: "https://apps.apple.com/app/id6782756591",
  playStoreUrl: "https://play.google.com/store/apps/details?id=ph.bookit.app",
}

/** Picks the store for a phone; returns undefined for computers and unknown devices. */
export function storeUrlFor(app: StoreApp, userAgent: string): string | undefined {
  if (/iPhone|iPad|iPod/.test(userAgent)) return app.appStoreUrl
  if (/Android/i.test(userAgent)) return app.playStoreUrl
  return undefined
}
