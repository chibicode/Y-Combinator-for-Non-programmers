import getConfig from 'next/config'
import React from 'react'
import bundles, { BundleTypes } from 'src/lib/contentBundles'
const { publicRuntimeConfig } = getConfig()

const EmptyComponent = () => null

const Content: React.SFC<{ name: keyof BundleTypes }> = ({ name }) => {
  const locale = publicRuntimeConfig.locale as 'jp' | 'en'
  const Component = bundles[name][locale] || EmptyComponent
  return <Component />
}

export default Content
