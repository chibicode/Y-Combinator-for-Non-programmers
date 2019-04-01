/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { Fragment } from 'react'
import Emoji from 'src/components/Emoji'
import { fontSizes, ns, spaces } from 'src/lib/theme'

interface EmojiSeparatorProps {
  emojis: string[]
  badges?: React.ReactNode[]
  size: 'sm' | 'md' | 'lg'
  alignCenter: boolean
  Component: React.ComponentType | string
}

const fontSize = (size: EmojiSeparatorProps['size']) =>
  ({
    sm: [fontSizes(1.4), fontSizes(1.4)],
    md: [fontSizes(2), fontSizes(2.5)],
    lg: [fontSizes(3), fontSizes(4)]
  }[size])

const margins = (size: EmojiSeparatorProps['size']) =>
  ({
    sm: [spaces(0), spaces(0)],
    md: [spaces(0.5), spaces(0.75)],
    lg: [spaces(0.5), spaces(0.75)]
  }[size])

const EmojiSeparator = ({
  emojis,
  badges,
  size,
  Component,
  alignCenter
}: EmojiSeparatorProps) => (
  <Component
    css={css`
      text-align: ${alignCenter ? 'center' : 'left'};
      margin: ${margins(size)[0]} 0 ${margins(size)[1]};
      font-size: ${fontSize(size)[0]};
      ${ns} {
        font-size: ${fontSize(size)[1]};
      }
    `}
  >
    {badges
      ? badges.map((badge, index) => (
          <Fragment key={`${badge}${index}`}>{badge} </Fragment>
        ))
      : emojis.map((emoji, index) => (
          <Fragment key={`${emoji}${index}`}>
            <Emoji>{emoji}</Emoji>{' '}
          </Fragment>
        ))}
  </Component>
)

EmojiSeparator.defaultProps = {
  size: 'md',
  spacing: 'md',
  Component: 'div',
  alignCenter: true,
  emojis: []
}

export default EmojiSeparator
