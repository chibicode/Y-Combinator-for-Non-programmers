import React from 'react'
import { Strong } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import { allTranslations } from 'src/lib/h'

export const yesCaption = {
  en: <>Secret Boolean Code: {allTranslations.ycYes().en}</>,
  jp: <>二択暗号: {allTranslations.ycYes().jp}</>
}

export const noCaption = {
  en: <>Secret Boolean Code: {allTranslations.ycNo().en}</>,
  jp: <>二択暗号: {allTranslations.ycNo().jp}</>
}

export const notCaption = {
  en: (
    <>
      Bento box for <Strong>NOT</Strong> <Emoji>🍱</Emoji>
    </>
  ),
  jp: (
    <>
      <Strong>「反対」</Strong>
      にする弁当箱 <Emoji>🍱</Emoji>
    </>
  )
}

export const combineNotCaption = (target: 'yes' | 'no') => ({
  en: (
    <>
      <Strong>NOT</Strong>{' '}
      {target === 'yes'
        ? allTranslations.ycYes().en
        : allTranslations.ycNo().en}
    </>
  ),
  jp: (
    <>
      {target === 'yes'
        ? allTranslations.ycYes().jp
        : allTranslations.ycNo().jp}{' '}
      の<Strong>反対</Strong>
    </>
  )
})
