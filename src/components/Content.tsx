import React from 'react'
import bundles, { BundleTypes } from 'src/lib/contentBundles'
import locale from 'src/lib/locale'

export interface ContentProps {
  name: keyof BundleTypes
}

const Content: React.SFC<{ name: keyof BundleTypes }> = ({ name }) => {
  const Component = bundles[name][locale]
  return <Component />
}

export default Content
