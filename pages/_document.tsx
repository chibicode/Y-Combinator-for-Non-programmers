import { extractCritical } from 'emotion-server'
import Document, { Head, Main, NextScript } from 'next/document'

// https://stackoverflow.com/a/8877902/114157
const onTouchStart = () => undefined

export default class MyDocument extends Document<{
  css: string
  ids: string[]
}> {
  public static getInitialProps({ renderPage }: { renderPage: any }) {
    const page = renderPage()
    const styles = extractCritical(page.html)
    return { ...page, ...styles }
  }

  // https://github.com/zeit/next.js/issues/4883
  constructor(props: any) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids
    }
  }

  public render() {
    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body onTouchStart={onTouchStart}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
