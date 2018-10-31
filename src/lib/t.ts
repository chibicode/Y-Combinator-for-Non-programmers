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
    en: 'Wish List',
    jp: 'いつか食べたいものリスト'
  },
  ycEpisode5: {
    en: 'Priorities',
    jp: '順序'
  },
  ycEpisode6: {
    en: 'Leftmost First',
    jp: 'いちばん左から'
  },
  ycEpisode7: {
    en: 'The Devil',
    jp: '小悪魔'
  },
  ycEpisode8: {
    en: 'The Two Patterns',
    jp: 'ふたつのパターン'
  },
  ycEpisode9: {
    en: 'More Patterns',
    jp: 'TBD'
  }
}

const h = (x: keyof typeof allTranslations) => allTranslations[x][locale]

export default h
