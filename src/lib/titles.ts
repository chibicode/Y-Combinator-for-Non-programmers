import locale from 'src/lib/locale'

export const allTitles = {
  title: {
    // Must fit in https://moz.com/learn/seo/title-tag
    en: 'Y Combinator for Everyone',
    jp: 'コンピューターサイエンスと魔法のYコンビネーター'
  },
  episode1: {
    en: 'The Bento Boxes',
    jp: 'これっくらいの、お弁当箱に…'
  },
  episode2: {
    en: 'The Middle Item',
    jp: '真ん中の料理'
  },
  episode3: {
    en: '“Eat Later” List',
    jp: 'あとで食べるものリスト'
  },
  episode4: {
    en: 'Priorities, Part 1',
    jp: '順序その1'
  },
  episode5: {
    en: 'Priorities, Part 2',
    jp: '順序その2'
  },
  episode6: {
    en: 'Shuffle Time',
    jp: 'シャッフルタイム'
  },
  episode7: {
    en: 'Secret Code',
    jp: '弁当箱の暗号'
  },
  episode8: {
    en: 'Plus One',
    jp: '1を足す'
  },
  episode9: {
    en: 'Addition and Multiplication',
    jp: '足し算と掛け算'
  },
  episode10: {
    en: 'Secret Boolean Code',
    jp: '弁当箱の二択暗号'
  },
  episode11: {
    en: 'Both Yes?',
    jp: '両方とも「はい」？'
  },
  episode12: {
    en: 'If, Then, Else',
    jp: '「はい」ならこうする、「いいえ」ならこうする'
  }
}

const h = (x: keyof typeof allTitles) => allTitles[x][locale]

export default h
