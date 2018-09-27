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

  'l1/Intro': {
    jp: React.ComponentType<any>
    en: React.ComponentType<any>
  }
}

const bundles: BundleTypes = {
  'home/ComingSoon': {
    // @ts-ignore - import isn't typed correctly
    en: dynamic(() =>
      import(/* webpackChunkName: 'home/ComingSoon.en' */ 'src/contents/home/ComingSoon.en')
    ),
    // @ts-ignore - import isn't typed correctly
    jp: dynamic(() =>
      import(/* webpackChunkName: 'home/ComingSoon.jp' */ 'src/contents/home/ComingSoon.jp')
    )
  },
  'home/Welcome': {
    // @ts-ignore - import isn't typed correctly
    en: dynamic(() =>
      import(/* webpackChunkName: 'home/Welcome.en' */ 'src/contents/home/Welcome.en')
    ),
    // @ts-ignore - import isn't typed correctly
    jp: dynamic(() =>
      import(/* webpackChunkName: 'home/Welcome.jp' */ 'src/contents/home/Welcome.jp')
    )
  },
  'l1/Intro': {
    // @ts-ignore - import isn't typed correctly
    en: dynamic(() =>
      import(/* webpackChunkName: 'l1/Intro.en' */ 'src/contents/l1/Intro.en')
    ),
    // @ts-ignore - import isn't typed correctly
    jp: dynamic(() =>
      import(/* webpackChunkName: 'l1/Intro.jp' */ 'src/contents/l1/Intro.jp')
    )
  }
}

export default bundles
