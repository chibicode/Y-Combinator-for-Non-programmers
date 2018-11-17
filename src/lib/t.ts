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
    en: '“Eat Later” List',
    jp: 'あとで食べるものリスト'
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
    en: 'Shuffle Time',
    jp: 'シャッフルタイム'
  },
  ycEpisode8: {
    en: 'Secret Code',
    jp: '弁当箱の暗号'
  },
  ycEpisode9: {
    en: 'TBD',
    jp: 'TBD'
  },
  ycEpisode10: {
    en: 'The Two Patterns',
    jp: 'ふたつのパターン'
  },
  ycEpisode11: {
    en: 'Patterns You’ve Seen Before',
    jp: 'どこかで見たような法則'
  }
}

const h = (x: keyof typeof allTranslations) => allTranslations[x][locale]

export default h
