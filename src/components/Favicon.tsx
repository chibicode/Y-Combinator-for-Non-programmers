import React from 'react'
import { colors } from 'src/lib/theme'

// Favicon generated from https://realfavicongenerator.net
const faviconPrefix = `/static/images/favicon`
const faviconBgColor = colors('socialBackground')

const Favicon: React.FunctionComponent<{}> = () => (
  <>
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href={`${faviconPrefix}/apple-touch-icon.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={`${faviconPrefix}/favicon-32x32.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={`${faviconPrefix}/favicon-16x16.png`}
    />
    <link rel="manifest" href={`${faviconPrefix}/site.webmanifest`} />
    <link
      rel="mask-icon"
      href={`${faviconPrefix}/safari-pinned-tab.svg`}
      color={faviconBgColor}
    />
    <meta name="msapplication-TileColor" content={faviconBgColor} />
    <meta name="theme-color" content={faviconBgColor} />
  </>
)

export default Favicon
