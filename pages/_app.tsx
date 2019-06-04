import React from 'react'
import App, { Container } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import { pageview } from 'src/lib/gtag'
import GlobalState from 'src/components/GlobalState'
import reloadTwitterScript from 'src/lib/reloadTwitterScript'

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => {
  reloadTwitterScript()
  NProgress.start()
})
Router.events.on('routeChangeComplete', (url: string) => {
  pageview(url)
  NProgress.done()
})
Router.events.on('routeChangeError', () => NProgress.done())

export default class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <GlobalState>
          <Component {...pageProps} />
        </GlobalState>
      </Container>
    )
  }
}
