// WARNING: Do not modify this file - it's generated automatically.
import dynamic from 'next/dynamic'

export interface BundleTypes {
  'others/welcome': {
    jp: React.ComponentType<any>
    en: React.ComponentType<any>
  }
}

const bundles: BundleTypes = {
  'others/welcome': {
    // @ts-ignore - mdx import isn't typed correctly
    en: dynamic(import('src/contents/others/welcome.en.mdx')),
    // @ts-ignore - mdx import isn't typed correctly
    jp: dynamic(import('src/contents/others/welcome.jp.mdx'))
  }
}

export default bundles
