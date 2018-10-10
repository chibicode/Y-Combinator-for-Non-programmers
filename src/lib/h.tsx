import React from 'react'
import { Strong } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import locale from 'src/lib/locale'

interface LocaleJson {
  en: JSX.Element | string
  jp: JSX.Element | string
}

export const allTranslations = {
  ycBentoBox: () => ({
    en: (
      <>
        “bento box <Emoji>🍱</Emoji>”
      </>
    ),
    jp: (
      <>
        「不思議な弁当箱 <Emoji>🍱</Emoji>」
      </>
    )
  }),
  ycNext: () => ({
    en: (
      <>
        <Strong>
          Next <Emoji>⏩</Emoji>
        </Strong>
      </>
    ),
    jp: (
      <>
        <Strong>
          次へ <Emoji>⏩</Emoji>
        </Strong>
      </>
    )
  }),
  ycPrevious: () => ({
    en: (
      <>
        <Strong>
          <Emoji>⏪</Emoji> Previous
        </Strong>
      </>
    ),
    jp: (
      <>
        <Strong>
          <Emoji>⏪</Emoji> 前へ
        </Strong>
      </>
    )
  }),
  ycDone: () => ({
    en: (
      <>
        <Strong>
          Done <Emoji>✅</Emoji>
        </Strong>
      </>
    ),
    jp: (
      <>
        <Strong>
          終了 <Emoji>✅</Emoji>
        </Strong>
      </>
    )
  }),
  ycNextButtonStartPrimaryText: () => ({
    en: 'OK, Let’s Go!',
    jp: '次のページへ進む'
  }),
  ycNextButtonCheckAnswerPrimaryText: () => ({
    en: 'Check My Answer',
    jp: '次のページへ進む'
  }),
  ycNextButtonSecondaryText: (nextEpisodeNumber: number) => ({
    en: <>Continue to Episode {nextEpisodeNumber}</>,
    jp: (
      <>
        第{nextEpisodeNumber}
        章へ
      </>
    )
  }),
  introductionPageLink: () => ({
    en: 'Introduction',
    jp: '序章'
  }),
  indexPageLink: () => ({
    en: 'View All Episodes',
    jp: '目次'
  })
}

const h = (x: keyof typeof allTranslations, y?: any) => {
  const fn: (...args: any[]) => LocaleJson = allTranslations[x]
  return fn(y)[locale]
}

export default h
