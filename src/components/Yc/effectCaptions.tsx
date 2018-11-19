import React from 'react'
import { Strong } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'

export const plusOneCaption = {
  en: (
    <Strong>
      Increases secret code by 1 <Emoji>🍱</Emoji> <Emoji>➕</Emoji>{' '}
      <Emoji>1️⃣</Emoji>
    </Strong>
  ),
  jp: (
    <Strong>
      暗号の数字を1増やす <Emoji>🍱</Emoji> <Emoji>➕</Emoji> <Emoji>1️⃣</Emoji>
    </Strong>
  )
}
