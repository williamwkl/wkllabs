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

