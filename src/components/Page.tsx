import Head from 'next/head'
import React from 'react'
import GlobalStyles from 'src/components/GlobalStyles'

const Page: React.SFC<{ children: React.ReactNode }> = ({ children }) => (
  <GlobalStyles>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
        key="viewport"
      />
      <title key="title">
        {/* Must fit in https://moz.com/learn/seo/title-tag */}
        Hoshiai: Great Computer Science Ideas for Non-Programmers
      </title>
    </Head>
    {children}
  </GlobalStyles>
)

export default Page
