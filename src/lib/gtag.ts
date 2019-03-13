/* eslint @typescript-eslint/camelcase: 0 */
import { isJp } from './locale'
// https://github.com/zeit/next.js/blob/canary/examples/with-google-analytics/lib/gtag.js
export const GA_TRACKING_ID = isJp ? 'UA-32987822-26' : 'UA-32987822-25'

declare global {
  interface Window {
    gtag: any
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_location: url
  })
}
