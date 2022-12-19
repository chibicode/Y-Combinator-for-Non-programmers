import Head from 'next/head'
import React from 'react'
import Favicon from 'src/components/Favicon'
import GlobalStyles from 'src/components/GlobalStyles'
import locale, { ogLocale } from 'src/lib/locale'

const Page = ({ children }: { children: React.ReactNode }) => (
  <GlobalStyles>
    <Head>
      {locale === 'en' && (
        <>
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,900&display=fallback"
            rel="stylesheet"
          />
        </>
      )}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@chibicode" />
      <meta name="twitter:creator" content="@chibicode" />
      <meta property="fb:admins" content="1227210274" />
    </Head>
    <Favicon />
    {children}
  </GlobalStyles>
)

export default Page
