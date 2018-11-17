import Head from 'next/head'
import React from 'react'
import Favicon from 'src/components/Favicon'
import GlobalContextProvider from 'src/components/GlobalContextProvider'
import GlobalStyles from 'src/components/GlobalStyles'
import t from 'src/lib/t'

class Page extends React.Component<{ children: React.ReactNode }> {
  private lastTouchEnd = 0

  public componentDidMount() {
    document.addEventListener(
      'touchend',
      event => {
        const now = new Date().getTime()
        if (now - this.lastTouchEnd <= 300) {
          event.preventDefault()
        }
        this.lastTouchEnd = now
      },
      false
    )
  }

  public render() {
    const { children } = this.props
    return (
      <GlobalContextProvider>
        <GlobalStyles>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
              key="viewport"
            />
            <title key="title">{t('title')}</title>
            <Favicon />
          </Head>
          {children}
        </GlobalStyles>
      </GlobalContextProvider>
    )
  }
}

export default Page
