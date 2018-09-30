// WARNING: Do not modify this file - it's generated automatically.
import dynamic from 'next/dynamic'
import DynamicLoading from 'src/components/DynamicLoading'

export interface BundleTypes {
  'home/ComingSoon': {
    jp: React.ComponentType<any>
    en: React.ComponentType<any>
  }

  'home/Welcome': {
    jp: React.ComponentType<any>
    en: React.ComponentType<any>
  }

  'l1/1': {
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
    en: dynamic(
      // @ts-ignore - import isn't typed correctly
      () =>
        import(/* webpackChunkName: 'home/ComingSoon.en' */ 'src/contents/home/ComingSoon.en'),
      { loading: () => <DynamicLoading /> }
    ),
    jp: dynamic(
      // @ts-ignore - import isn't typed correctly
      () =>
        import(/* webpackChunkName: 'home/ComingSoon.jp' */ 'src/contents/home/ComingSoon.jp'),
      { loading: () => <DynamicLoading /> }
    )
  },
  'home/Welcome': {
    en: dynamic(
      // @ts-ignore - import isn't typed correctly
      () =>
        import(/* webpackChunkName: 'home/Welcome.en' */ 'src/contents/home/Welcome.en'),
      { loading: () => <DynamicLoading /> }
    ),
    jp: dynamic(
      // @ts-ignore - import isn't typed correctly
      () =>
        import(/* webpackChunkName: 'home/Welcome.jp' */ 'src/contents/home/Welcome.jp'),
      { loading: () => <DynamicLoading /> }
    )
  },
  'l1/1': {
    en: dynamic(
      // @ts-ignore - import isn't typed correctly
      () => import(/* webpackChunkName: 'l1/1.en' */ 'src/contents/l1/1.en'),
      { loading: () => <DynamicLoading /> }
    ),
    jp: dynamic(
      // @ts-ignore - import isn't typed correctly
      () => import(/* webpackChunkName: 'l1/1.jp' */ 'src/contents/l1/1.jp'),
      { loading: () => <DynamicLoading /> }
    )
  },
  'l1/Intro': {
    en: dynamic(
      // @ts-ignore - import isn't typed correctly
      () =>
        import(/* webpackChunkName: 'l1/Intro.en' */ 'src/contents/l1/Intro.en'),
      { loading: () => <DynamicLoading /> }
    ),
    jp: dynamic(
      // @ts-ignore - import isn't typed correctly
      () =>
        import(/* webpackChunkName: 'l1/Intro.jp' */ 'src/contents/l1/Intro.jp'),
      { loading: () => <DynamicLoading /> }
    )
  }
}

export default bundles
