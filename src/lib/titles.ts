import locale from 'src/lib/locale'
import {
  episodeCategory,
  episodeNumberWithinCategory
} from 'src/lib/episodeCategories'

export const lessonTitle = {
  en: 'Y Combinator for Everyone',
  jp: 'コンピューターサイエンスと魔法のYコンビネーター'
}[locale]

export const episodeTitles = {
  en: {
    1: 'The Bento Boxes',
    2: 'The Middle Item',
    3: '“Eat Later” List',
    4: 'Priorities, Part 1',
    5: 'Priorities, Part 2',
    6: 'Shuffle Time',
    7: 'Secret Code',
    8: 'Plus One',
    9: 'Addition and Multiplication',
    10: 'Secret Boolean Code',
    11: 'Both Yes'
    // 12: 'If, Then, Else'
  },
  jp: {
    1: 'これっくらいの、お弁当箱に…',
    2: '弁当箱の法則',
    3: '4品の弁当箱',
    4: '優先順位',
    5: '応用問題',
    6: 'シャッフルタイム',
    7: '弁当箱の暗号',
    8: '1を足す',
    9: '足し算と掛け算',
    10: '弁当箱の暗号',
    11: '両方とも「はい」？'
    // 12: '「はい」ならこうする、「いいえ」ならこうする'
  }
}[locale]

export const episodePrefixes = {
  en: {
    intro: 'Intro',
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced'
  },
  jp: {
    intro: '序章',
    beginner: '初級',
    intermediate: '中級',
    advanced: '上級'
  }
}[locale]

export const episodePrefix = (episodeNumber: number) =>
  `${
    episodePrefixes[
      episodeCategory(episodeNumber) as keyof typeof episodePrefixes
    ]
  }${
    episodeNumberWithinCategory(episodeNumber)
      ? `${locale === 'en' ? ' ' : 'その'}${episodeNumberWithinCategory(
          episodeNumber
        )}`
      : ''
  }`

export const episodeTitleWithPrefix = (episodeNumber: number) =>
  `${episodePrefix(episodeNumber)}: ${
    episodeTitles[episodeNumber as keyof typeof episodeTitles]
  }`
