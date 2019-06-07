import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { lang } from 'src/lib/locale'

class MyDocument extends Document {
  public render() {
    return (
      <Html lang={lang}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
