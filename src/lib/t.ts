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
    en: 'Episode 1: Your Personal Chef',
    jp: '第1章: お抱えのシェフ'
  }
}

const t = (x: keyof typeof allTranslations) => allTranslations[x][locale]

export default t
