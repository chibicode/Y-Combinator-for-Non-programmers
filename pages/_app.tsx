import App from 'next/app'
import GlobalState from 'src/components/GlobalState'

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
