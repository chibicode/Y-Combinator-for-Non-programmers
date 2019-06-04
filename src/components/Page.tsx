import Head from 'next/head'
import React from 'react'
import Favicon from 'src/components/Favicon'
import GlobalStyles from 'src/components/GlobalStyles'
import { GA_TRACKING_ID } from '../lib/gtag'
import { dateSchemaString } from 'src/lib/date'
import { ogLocale } from 'src/lib/locale'

const Page = ({ children }: { children: React.ReactNode }) => (
  <GlobalStyles>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
        key="viewport"
      />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content={ogLocale} />
      <meta property="article:published_time" content={dateSchemaString} />
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${GA_TRACKING_ID}', { 'anonymize_ip': true });`
        }}
      />
      <script async src="https://platform.twitter.com/widgets.js" />
    </Head>
    <Favicon />
    {children}
  </GlobalStyles>
)

export default Page
