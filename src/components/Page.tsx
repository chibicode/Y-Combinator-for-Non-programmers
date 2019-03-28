import Head from 'next/head'
import React from 'react'
import Favicon from 'src/components/Favicon'
import GlobalStyles from 'src/components/GlobalStyles'
import { lessonTitle } from 'src/lib/titles'
import { GA_TRACKING_ID } from '../lib/gtag'

const Page = ({ children }: { children: React.ReactNode }) => (
  <GlobalStyles>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
        key="viewport"
      />
      <title key="title">{lessonTitle}</title>
      <Favicon />
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
    </Head>
    {children}
  </GlobalStyles>
)

export default Page
