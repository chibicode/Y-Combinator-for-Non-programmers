// WARNING: Do not modify this file - it's generated automatically.
import dynamic from 'next/dynamic'

export interface BundleTypes {
  'home/ComingSoon': {
    jp: React.ComponentType<any>
    en: React.ComponentType<any>
  }

  'home/Welcome': {
    jp: React.ComponentType<any>
    en: React.ComponentType<any>
  }
}

const bundles: BundleTypes = {
  'home/ComingSoon': {
    // @ts-ignore - import isn't typed correctly
    en: dynamic(import('src/contents/home/ComingSoon.en')),
    // @ts-ignore - import isn't typed correctly
    jp: dynamic(import('src/contents/home/ComingSoon.jp'))
  },
  'home/Welcome': {
    // @ts-ignore - import isn't typed correctly
    en: dynamic(import('src/contents/home/Welcome.en')),
    // @ts-ignore - import isn't typed correctly
    jp: dynamic(import('src/contents/home/Welcome.jp'))
  }
}

export default bundles
