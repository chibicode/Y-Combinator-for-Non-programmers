import Head from 'next/head'
import React from 'react'
import Favicon from 'src/components/Favicon'
import GlobalStyles from 'src/components/GlobalStyles'
import { GA_TRACKING_ID_JP } from 'src/lib/gtag'
import { dateSchemaString } from 'src/lib/date'
import locale, { ogLocale } from 'src/lib/locale'
import { ogImageUrl } from 'src/lib/meta'
import { description } from 'src/lib/titles'

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
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content={ogLocale} />
      <meta property="article:published_time" content={dateSchemaString} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@chibicode" />
      <meta name="twitter:creator" content="@chibicode" />
      <meta property="fb:admins" content="1227210274" />
      {locale === 'jp' && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID_JP}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${GA_TRACKING_ID_JP}', { 'anonymize_ip': true });`
            }}
          />
        </>
      )}
      <script async src="https://platform.twitter.com/widgets.js" />
    </Head>
    <Favicon />
    {children}
  </GlobalStyles>
)

export default Page
