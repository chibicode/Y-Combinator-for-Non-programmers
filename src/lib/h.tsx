import React from 'react'
import { Strong } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import locale from 'src/lib/locale'

export const allTranslations = {
  ycBentoBox: {
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
  },
  ycNext: {
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
  },
  ycPrevious: {
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
  },
  ycDone: {
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
  }
}

const h = (x: keyof typeof allTranslations) => allTranslations[x][locale]

export default h
