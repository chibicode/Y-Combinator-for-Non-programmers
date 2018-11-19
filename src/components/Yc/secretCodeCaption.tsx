import React, { Fragment } from 'react'
import { Strong } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'

const secretCodeCaption = (emoji: string, count: number) => ({
  en: (
    <>
      Secret Code: <Strong>{count}</Strong> ={' '}
      {[...Array(count)].map((_, i) => (
        <Fragment key={`${i} ${emoji}`}>
          <Emoji>{emoji}</Emoji>
          {i < count - 1 && ' '}
        </Fragment>
      ))}
    </>
  ),
  jp: (
    <>
      暗号: <Strong>{count}</Strong> ={' '}
      {[...Array(count)].map((_, i) => (
        <Fragment key={`${i} ${emoji}`}>
          <Emoji>{emoji}</Emoji>
          {i < count - 1 && ' '}
        </Fragment>
      ))}
    </>
  )
})

export default secretCodeCaption
