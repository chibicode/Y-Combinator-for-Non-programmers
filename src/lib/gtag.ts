/* eslint @typescript-eslint/camelcase: 0 */
// https://github.com/zeit/next.js/blob/canary/examples/with-google-analytics/lib/gtag.js
export const GA_TRACKING_ID_JP = 'UA-32987822-26'

declare global {
  interface Window {
    gtag: any
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
// https://github.com/zeit/next.js/pull/6787
export const pageview = (path: string) => {
  window.gtag('config', GA_TRACKING_ID_JP, {
    page_path: path,
    anonymize_ip: true
  })
}
