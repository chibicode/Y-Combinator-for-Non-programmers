import Head from 'next/head'
import React from 'react'
import Favicon from 'src/components/Favicon'
import GlobalStyles from 'src/components/GlobalStyles'
import t from 'src/lib/t'

const Page: React.SFC<{ children: React.ReactNode }> = ({ children }) => (
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
)

export default Page
