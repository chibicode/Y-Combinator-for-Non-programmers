import locale from 'src/lib/locale'
import {
  episodeCategory,
  episodeNumberWithinCategory
} from 'src/lib/episodeCategories'

export const lessonTitle = {
  en: 'Y Combinator for Everyone',
  jp: 'コンピュータサイエンスと魔法のYコンビネータ'
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
    11: 'Both Yes',
    12: '?',
    13: '?',
    14: '?',
    15: '?',
    16: '?'
  },
  jp: {
    1: 'これっくらいの、お弁当箱に…',
    2: '弁当箱の法則',
    3: '4品の弁当箱',
    4: '3段の弁当箱',
    5: '順番はどうなる？',
    6: '弁当箱の暗号',
    7: '足し算',
    8: '掛け算',
    9: '条件分岐',
    10: '無限ループ',
    11: '結果が変わる弁当箱',
    12: '結果が変わるのを防ぐ',
    13: '省略表記',
    14: '?',
    15: '?',
    16: '?'
  }
}[locale]

export const episodePrefixes = {
  en: {
    intro: 'Introduction',
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
    epilogue: 'Epilogue'
  },
  jp: {
    intro: 'はじめに',
    beginner: '初級',
    intermediate: '中級',
    advanced: '上級',
    epilogue: 'あとがき'
  }
}[locale]

export const episodeCategoryName = (episodeNumber: number) =>
  episodePrefixes[
    episodeCategory(episodeNumber) as keyof typeof episodePrefixes
  ]

export const episodePrefix = (episodeNumber: number) =>
  `${episodeCategoryName(episodeNumber)}${
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
