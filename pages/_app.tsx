import App from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import { pageview } from 'src/lib/gtag'

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', (url: string) => {
  pageview(url)
  NProgress.done()
})
Router.events.on('routeChangeError', () => NProgress.done())

export default App
