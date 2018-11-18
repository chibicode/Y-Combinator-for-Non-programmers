import React from 'react'
import { Strong } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'

const secretCodeCaption = (emoji: string, count: number) => ({
  en: (
    <>
      Secret Code: <Strong>{count}</Strong> ={' '}
      {[...Array(count)].map((_, i) => (
        <>
          <Emoji>{emoji}</Emoji>
          {i < count - 1 && ' '}
        </>
      ))}
    </>
  ),
  jp: (
    <>
      暗号: <Strong>{count}</Strong> ={' '}
      {[...Array(count)].map((_, i) => (
        <>
          <Emoji>{emoji}</Emoji>
          {i < count - 1 && ' '}
        </>
      ))}
    </>
  )
})

export default secretCodeCaption
