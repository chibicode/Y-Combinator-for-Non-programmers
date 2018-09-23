// WARNING: Do not modify this file - it's generated automatically.
import dynamic from 'next/dynamic'

export interface BundleTypes {
  'others/Welcome': {
    jp: React.ComponentType<any>
    en: React.ComponentType<any>
  }
}

const bundles: BundleTypes = {
  'others/Welcome': {
    // @ts-ignore - import isn't typed correctly
    en: dynamic(import('src/contents/others/Welcome.en')),
    // @ts-ignore - import isn't typed correctly
    jp: dynamic(import('src/contents/others/Welcome.jp'))
  }
}

export default bundles
