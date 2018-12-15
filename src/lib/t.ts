import locale from 'src/lib/locale'

export const allTranslations = {
  title: {
    // Must fit in https://moz.com/learn/seo/title-tag
    en: 'CSmoji: Learn Computer Science with Emojis',
    jp: 'CSmoji: 絵文字で学ぶコンピューターサイエンス'
  },
  ycTitle: {
    en: 'Y Combinator for Non-Programmers',
    jp: 'あなたの知らないYコンビネーター'
  },
  ycEpisode1: {
    en: 'The Bento Boxes',
    jp: 'これっくらいの、お弁当箱に…'
  },
  ycEpisode2: {
    en: 'Three Scenarios',
    jp: '「次へ」ボタンと「前へ」ボタン'
  },
  ycEpisode3: {
    en: '“Eat Later” List',
    jp: 'あとで食べるものリスト'
  },
  ycEpisode4: {
    en: 'Priorities, Part 1',
    jp: '順序その1'
  },
  ycEpisode5: {
    en: 'Priorities, Part 2',
    jp: '順序その2'
  },
  ycEpisode6: {
    en: 'Shuffle Time',
    jp: 'シャッフルタイム'
  },
  ycEpisode7: {
    en: 'Secret Code',
    jp: '弁当箱の暗号'
  },
  ycEpisode8: {
    en: 'Plus One',
    jp: '1を足す'
  },
  ycEpisode9: {
    en: 'Addition and Multiplication',
    jp: '足し算と掛け算'
  },
  ycEpisode10: {
    en: 'Secret Boolean Code',
    jp: '弁当箱の二択暗号'
  },
  ycEpisode11: {
    en: 'Both Yes?',
    jp: '両方とも「はい」？'
  },
  ycEpisode12: {
    en: 'If, Then, Else',
    jp: '「はい」ならこうする、「いいえ」ならこうする'
  }
}

const h = (x: keyof typeof allTranslations) => allTranslations[x][locale]

export default h
