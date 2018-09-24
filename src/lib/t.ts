import locale from 'src/lib/locale'

export const allTranslations = {
  title: {
    // Must fit in https://moz.com/learn/seo/title-tag
    en: 'Hoshiai: Great Computer Science Ideas for Non-Programmers',
    jp: 'Hoshiai: コードを書かずにコンピューターサイエンスを学ぼう'
  },
  lesson1Title: {
    en: 'Y Combinator for Non-Programmers',
    jp: 'あなたの知らないYコンビネーター'
  }
}

const t = (x: keyof typeof allTranslations) => allTranslations[x][locale]

export default t
