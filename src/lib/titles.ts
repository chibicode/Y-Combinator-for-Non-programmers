import locale from 'src/lib/locale'
import {
  episodeCategory,
  episodeNumberWithinCategory
} from 'src/lib/episodeCategories'

export const lessonTitle = {
  en: 'Y Combinator for Non-programmers',
  jp: 'コンピュータサイエンスと魔法のYコンビネータ'
}[locale]

export const description = {
  en: 'A Terrible Introduction to Computer Science',
  jp: 'プログラミング未経験者向けの、邪道なコンピュータサイエンスの入門書'
}[locale]

export const episodeTitles = {
  en: {
    1: 'Mathboxes',
    2: 'The “Repeat” Feature',
    3: 'Lunchboxes',
    4: 'The Rules of The Lunchbox',
    5: 'Lunchboxes with 3 Rows',
    6: 'Minion’s Trick',
    7: 'The “Plus One” Effect',
    8: 'Super Saya',
    9: 'Can’t Add One?',
    10: 'The “Minus One” Effect',
    11: 'The “Conditional” Feature',
    12: 'Reproducing the “Conditional” Feature',
    13: 'Replace Parts of a Lunchbox',
    14: '?',
    15: '?',
    16: '?'
  },
  jp: {
    1: '計算箱',
    2: '繰り返しの機能',
    3: '弁当箱のパズル',
    4: '弁当箱の法則',
    5: '3段の弁当箱',
    6: 'ミニオンの芸',
    7: 'ゼロからイチへ',
    8: '天才サヤちゃん',
    9: '1を足せない？',
    10: '1を引く効果',
    11: '条件分岐の機能',
    12: '条件分岐の再現',
    13: '一部分を置き換える',
    14: '魔法のYコンビネータ',
    15: '足し算と掛け算、そして…',
    16: 'コンピュータサイエンス'
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
    epilogue: 'エピローグ'
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
