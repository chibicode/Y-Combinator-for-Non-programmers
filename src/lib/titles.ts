import locale from 'src/lib/locale'
import {
  episodeCategory,
  episodeNumberWithinCategory
} from 'src/lib/episodeCategories'
import contentVersion from 'src/lib/contentVersion'

export const lessonTitle = {
  en: 'Y Combinator for Non-programmers',
  jp: 'コンピュータサイエンスと魔法のYコンビネータ'
}[locale]

export const description = {
  en: 'Computer Science for the Rest of Us',
  jp: '『ファクトフルネス』訳者によるプログラミング未経験者向けの解説'
}[locale]

export const episodeTitles = {
  en: {
    1: '?',
    2: '?',
    3: '?',
    4: '?',
    5: '?',
    6: '?',
    7: '?',
    8: '?',
    9: '?',
    10: '?',
    11: '?',
    12: '?',
    13: '?',
    14: '?',
    15: '?',
    16: '?'
  },
  jp:
    contentVersion === 'v2'
      ? {
          1: '計算箱と、プラスマイナスの機能',
          2: '繰り返しの機能',
          3: '悪魔からの挑戦状と、弁当箱のパズル',
          4: '弁当箱の法則',
          5: '3段の弁当箱',
          6: 'ベンケイの芸',
          7: '?',
          8: '?',
          9: '?',
          10: '?',
          11: '?',
          12: '?',
          13: '?',
          14: '?',
          15: '?',
          16: '?'
        }
      : {
          1: 'これっくらいの、お弁当箱に…',
          2: '弁当箱の法則',
          3: '4品の弁当箱',
          4: '3段の弁当箱',
          5: '順番はどうなる？',
          6: '弁当箱の暗号',
          7: '足し算',
          8: '掛け算',
          9: '条件分岐',
          10: '結果が変わる弁当箱',
          11: '結果が変わるのを防ぐ',
          12: '引き算と省略表記',
          13: '掛け算と条件分岐の省略表記',
          14: '弁当箱の魔女',
          15: '魔法のYコンビネータ',
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
