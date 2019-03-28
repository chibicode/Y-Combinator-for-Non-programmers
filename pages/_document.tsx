import React from 'react'
import Document, { Html, Main, NextScript } from 'next/document'
import { lang } from 'src/lib/locale'

class MyDocument extends Document {
  public render() {
    return (
      <Html lang={lang}>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
