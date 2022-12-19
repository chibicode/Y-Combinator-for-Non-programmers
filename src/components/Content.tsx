import bundle from 'src/lib/contentsBundle'
import locale from 'src/lib/locale'

export interface ContentProps {
  name: keyof typeof bundle
}

const Content = ({ name }: ContentProps) => {
  const Component = (bundle[name] || {})[locale]
  if (!Component) {
    throw new Error(
      `Component is ${Component}. name: ${name}, locale: ${locale}`
    )
  }
  return <Component />
}

export default Content
