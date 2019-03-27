/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { Fragment } from 'react'
import Emoji from 'src/components/Emoji'
import { fontSizes, ns, spaces } from 'src/lib/theme'

interface EmojiSeparatorProps {
  emojis: string[]
  size: 'md' | 'lg'
  spacing: 'sm' | 'md'
  halfMarginBottom?: boolean
  Component: React.ComponentType | string
}

const EmojiSeparator = ({
  emojis,
  size,
  spacing,
  Component,
  halfMarginBottom
}: EmojiSeparatorProps) => (
  <Component
    css={css`
      text-align: center;
      margin: ${spacing === 'sm' ? spaces('-0.5') : spaces(1)} 0
        ${spacing === 'sm' ? 0 : halfMarginBottom ? spaces(0.75) : spaces(1.5)};
      font-size: ${size === 'lg' ? fontSizes(3) : fontSizes(2)};
      ${ns} {
        font-size: ${size === 'lg' ? fontSizes(4) : fontSizes(2.5)};
      }
    `}
  >
    {emojis.map((emoji, index) => (
      <Fragment key={`${emoji}${index}`}>
        <Emoji>{emoji}</Emoji>{' '}
      </Fragment>
    ))}
  </Component>
)

EmojiSeparator.defaultProps = {
  size: 'md',
  spacing: 'md',
  Component: 'div'
}

export default EmojiSeparator
