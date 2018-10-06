import locale from 'src/lib/locale'

export const allTranslations = {
  title: {
    // Must fit in https://moz.com/learn/seo/title-tag
    en: 'Hoshiai: Great Computer Science Ideas for Non-Programmers',
    jp: 'Hoshiai: プログラミング的思考をコードを書かずに身につける'
  },
  ycTitle: {
    en: 'Y Combinator for Non-Programmers',
    jp: 'あなたの知らないYコンビネーター'
  },
  ycEpisode1: {
    en: 'Your Personal Chef',
    jp: 'お抱えのシェフ'
  },
  ycEpisode2: {
    en: 'The Bento Boxes',
    jp: 'これっくらいの、お弁当箱に…'
  },
  ycEpisode3: {
    en: 'The Next and Previous Buttons',
    jp: '「次へ」ボタンと「前へ」ボタン'
  },
  ycEpisode4: {
    en: 'More than Two Cells on the Bottom',
    jp: '下段に3マス以上ある場合'
  },
  ycEpisode5: {
    en: 'Priorities',
    jp: '...'
  },
  introductionPage: {
    en: 'Introduction',
    jp: '序章'
  },
  episodeList: {
    en: 'Episode List',
    jp: '目次'
  }
}

const h = (x: keyof typeof allTranslations) => allTranslations[x][locale]

export default h
