// WARNING: Do not modify this file - it's generated automatically.
import dynamic from 'next/dynamic'

export interface BundleTypes {
  Welcome: {
    jp: React.ComponentType<any>
    en: React.ComponentType<any>
  }
}

const bundles: BundleTypes = {
  Welcome: {
    // @ts-ignore - mdx import isn't typed correctly
    en: dynamic(import('src/contents/Welcome.en.mdx')),
    // @ts-ignore - mdx import isn't typed correctly
    jp: dynamic(import('src/contents/Welcome.jp.mdx'))
  }
}

export default bundles
