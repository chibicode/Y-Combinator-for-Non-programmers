import dynamic from 'next/dynamic'
import React from 'react'

const Content: React.SFC<{ name: string }> = ({ name }) => {
  const Component = dynamic(
    import(`src/contents/${process.env.APP_LOCALE}/${name}.mdx`)
  )
  return <Component />
}

export default Content
