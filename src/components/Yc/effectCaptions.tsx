import React, { Fragment } from 'react'
import { Strong } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'

export const secretCodeCaption = (emoji: string, count: number) => ({
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

export const additionCaption = {
  en: (
    <Strong>
      Adds two secret code <Emoji>🍱</Emoji> <Emoji>➕</Emoji> <Emoji>🍱</Emoji>
    </Strong>
  ),
  jp: (
    <Strong>
      ふたつの暗号の数字を合計する <Emoji>🍱</Emoji> <Emoji>➕</Emoji>{' '}
      <Emoji>🍱</Emoji>
    </Strong>
  )
}

export const multiplicationCaption = {
  en: (
    <Strong>
      Multiplies two secret code <Emoji>🍱</Emoji> <Emoji>✖️</Emoji>{' '}
      <Emoji>🍱</Emoji>
    </Strong>
  ),
  jp: (
    <Strong>
      ふたつの暗号の数字を掛ける <Emoji>🍱</Emoji> <Emoji>✖️</Emoji>{' '}
      <Emoji>🍱</Emoji>
    </Strong>
  )
}

export const combineSecretCodeCaption = (
  type: 'add' | 'multiply',
  emoji1: string,
  count1: number,
  emoji2: string,
  count2: number
) => {
  const symbol = type === 'add' ? '+' : '×'
  const result = (
    <>
      <Strong>{count1}</Strong> {symbol} <Strong>{count2}</Strong> (
      {[...Array(count1)].map((_, i) => (
        <Fragment key={`${i} ${emoji1} 1`}>
          <Emoji>{emoji1}</Emoji>
          {i < count1 - 1 && ' '}
        </Fragment>
      ))}{' '}
      {symbol}{' '}
      {[...Array(count2)].map((_, i) => (
        <Fragment key={`${i} ${emoji2} 2`}>
          <Emoji>{emoji2}</Emoji>
          {i < count2 - 1 && ' '}
        </Fragment>
      ))}
      )
    </>
  )
  return {
    en: result,
    jp: result
  }
}
