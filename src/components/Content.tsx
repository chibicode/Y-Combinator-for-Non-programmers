import React from 'react'
import bundles, { BundleTypes } from 'src/lib/contentBundles'

const EmptyComponent = () => null
const locale = process.env.APP_LOCALE as 'jp' | 'en'

const Content: React.SFC<{ name: keyof BundleTypes }> = ({ name }) => {
  console.log(locale)
  const Component = bundles[name][locale] || EmptyComponent
  return <Component />
}

export default Content
