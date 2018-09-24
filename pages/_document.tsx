import { extractCritical } from 'emotion-server'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  public static getInitialProps({ renderPage }: { renderPage: any }) {
    const page = renderPage()
    const styles = extractCritical(page.html)
    return { ...page, ...styles }
  }

  public render() {
    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
