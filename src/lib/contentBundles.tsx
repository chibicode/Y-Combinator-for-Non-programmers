// WARNING: Do not modify this file - it's generated automatically.
import dynamic from 'next/dynamic'
import DynamicLoading from 'src/components/DynamicLoading'

export interface BundleTypes {
  'others/ComingSoon': {
    jp: React.ComponentType<any>
    en: React.ComponentType<any>
  }

  'others/NewUser': {
    jp: React.ComponentType<any>
    en: React.ComponentType<any>
  }

  'others/Welcome': {
    jp: React.ComponentType<any>
    en: React.ComponentType<any>
  }

  'yc/1': {
    jp: React.ComponentType<any>
    en: React.ComponentType<any>
  }

  'yc/2': {
    jp: React.ComponentType<any>
    en: React.ComponentType<any>
  }

  'yc/3': {
    jp: React.ComponentType<any>
    en: React.ComponentType<any>
  }

  'yc/Intro': {
    jp: React.ComponentType<any>
    en: React.ComponentType<any>
  }
}

const bundles: BundleTypes = {
  'others/ComingSoon': {
    en: dynamic(
      // @ts-ignore - import isn't typed correctly
      () =>
        import(/* webpackChunkName: 'others/ComingSoon.en' */ 'src/contents/others/ComingSoon.en'),
      { loading: () => <DynamicLoading /> }
    ),
    jp: dynamic(
      // @ts-ignore - import isn't typed correctly
      () =>
        import(/* webpackChunkName: 'others/ComingSoon.jp' */ 'src/contents/others/ComingSoon.jp'),
      { loading: () => <DynamicLoading /> }
    )
  },
  'others/NewUser': {
    en: dynamic(
      // @ts-ignore - import isn't typed correctly
      () =>
        import(/* webpackChunkName: 'others/NewUser.en' */ 'src/contents/others/NewUser.en'),
      { loading: () => <DynamicLoading /> }
    ),
    jp: dynamic(
      // @ts-ignore - import isn't typed correctly
      () =>
        import(/* webpackChunkName: 'others/NewUser.jp' */ 'src/contents/others/NewUser.jp'),
      { loading: () => <DynamicLoading /> }
    )
  },
  'others/Welcome': {
    en: dynamic(
      // @ts-ignore - import isn't typed correctly
      () =>
        import(/* webpackChunkName: 'others/Welcome.en' */ 'src/contents/others/Welcome.en'),
      { loading: () => <DynamicLoading /> }
    ),
    jp: dynamic(
      // @ts-ignore - import isn't typed correctly
      () =>
        import(/* webpackChunkName: 'others/Welcome.jp' */ 'src/contents/others/Welcome.jp'),
      { loading: () => <DynamicLoading /> }
    )
  },
  'yc/1': {
    en: dynamic(
      // @ts-ignore - import isn't typed correctly
      () => import(/* webpackChunkName: 'yc/1.en' */ 'src/contents/yc/1.en'),
      { loading: () => <DynamicLoading /> }
    ),
    jp: dynamic(
      // @ts-ignore - import isn't typed correctly
      () => import(/* webpackChunkName: 'yc/1.jp' */ 'src/contents/yc/1.jp'),
      { loading: () => <DynamicLoading /> }
    )
  },
  'yc/2': {
    en: dynamic(
      // @ts-ignore - import isn't typed correctly
      () => import(/* webpackChunkName: 'yc/2.en' */ 'src/contents/yc/2.en'),
      { loading: () => <DynamicLoading /> }
    ),
    jp: dynamic(
      // @ts-ignore - import isn't typed correctly
      () => import(/* webpackChunkName: 'yc/2.jp' */ 'src/contents/yc/2.jp'),
      { loading: () => <DynamicLoading /> }
    )
  },
  'yc/3': {
    en: dynamic(
      // @ts-ignore - import isn't typed correctly
      () => import(/* webpackChunkName: 'yc/3.en' */ 'src/contents/yc/3.en'),
      { loading: () => <DynamicLoading /> }
    ),
    jp: dynamic(
      // @ts-ignore - import isn't typed correctly
      () => import(/* webpackChunkName: 'yc/3.jp' */ 'src/contents/yc/3.jp'),
      { loading: () => <DynamicLoading /> }
    )
  },
  'yc/Intro': {
    en: dynamic(
      // @ts-ignore - import isn't typed correctly
      () =>
        import(/* webpackChunkName: 'yc/Intro.en' */ 'src/contents/yc/Intro.en'),
      { loading: () => <DynamicLoading /> }
    ),
    jp: dynamic(
      // @ts-ignore - import isn't typed correctly
      () =>
        import(/* webpackChunkName: 'yc/Intro.jp' */ 'src/contents/yc/Intro.jp'),
      { loading: () => <DynamicLoading /> }
    )
  }
}

export default bundles
