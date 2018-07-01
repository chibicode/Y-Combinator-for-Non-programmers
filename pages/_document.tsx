import { extractCritical } from 'emotion-server'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  public static getInitialProps({ renderPage }) {
    const page = renderPage()
    const styles = extractCritical(page.html)
    return { ...page, ...styles }
  }

  public render() {
    return (
      <html>
        <Head>
          <title>Hoshiai</title>
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i"
            rel="stylesheet"
          />
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
