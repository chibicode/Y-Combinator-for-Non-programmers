import Head from 'next/head'
import React from 'react'
import Favicon from 'src/components/Favicon'
import GlobalContextProvider from 'src/components/GlobalContextProvider'
import GlobalStyles from 'src/components/GlobalStyles'
import t from 'src/lib/titles'

const Page: React.FC<{ children: React.ReactNode }> = ({
  children
}) => (
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

export default Page
