import React from 'react'
import App, { Container } from 'next/app'
import Router from 'next/router'
import { pageview } from 'src/lib/gtag'
import GlobalState from 'src/components/GlobalState'
import reloadTwitterScript from 'src/lib/reloadTwitterScript'

Router.events.on('routeChangeStart', () => {
  reloadTwitterScript()
})
Router.events.on('routeChangeComplete', (path: string) => {
  pageview(path)
})

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
