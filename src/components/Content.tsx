import React from 'react'
import bundles, { BundleTypes } from 'src/lib/contentBundles'
import locale from 'src/lib/locale'

export interface ContentProps {
  name: keyof BundleTypes
  componentProps?: object
}

const Content: React.SFC<ContentProps> = ({ name, componentProps }) => {
  const Component: React.ComponentType<{ componentProps?: object }> = (bundles[
    name
  ] || {})[locale]
  if (!Component) {
    throw new Error(
      `Component is ${Component}. name: ${name}, locale: ${locale}`
    )
  }
  return <Component componentProps={componentProps} />
}

export default Content
