import { css } from 'emotion'
import React, { Fragment } from 'react'
import Emoji from 'src/components/Emoji'
import { fontSizes, ns, spaces } from 'src/lib/theme'

interface EmojiSeparatorProps {
  emojis: string[]
  size?: 'md' | 'lg'
  spacing?: 'sm' | 'md'
  Component?: React.ComponentType | string
}

const EmojiSeparator: React.SFC<EmojiSeparatorProps> = ({
  emojis,
  size = 'md',
  spacing = 'md',
  Component = 'div'
}) => (
  <Component
    className={css`
      text-align: center;
      margin: ${spacing === 'sm' ? spaces('-0.5') : spaces(1.25)} 0
        ${spacing === 'sm' ? 0 : spaces(1.75)};
      font-size: ${size === 'lg' ? fontSizes(3) : fontSizes(2)};
      ${ns(css`
        font-size: ${size === 'lg' ? fontSizes(4) : fontSizes(2.5)};
      `)};
    `}
  >
    {emojis.map((emoji, index) => (
      <Fragment key={`${emoji}${index}`}>
        <Emoji>{emoji}</Emoji>{' '}
      </Fragment>
    ))}
  </Component>
)

export default EmojiSeparator
