import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import { pageview } from 'src/lib/gtag'
import GlobalState from 'src/components/GlobalState'
import reloadTwitterScript from 'src/lib/reloadTwitterScript'
import locale from 'src/lib/locale'

Router.events.on('routeChangeStart', () => {
  reloadTwitterScript()
})

if (locale === 'jp') {
  Router.events.on('routeChangeComplete', (path: string) => {
    pageview(path)
  })
}

export default class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props
    return (
      <GlobalState>
        <Component {...pageProps} />
      </GlobalState>
    )
  }
}
