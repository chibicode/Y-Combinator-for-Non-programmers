import { css } from 'emotion'
import React from 'react'
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
      margin: ${spacing === 'sm' ? 0 : spaces(1.5)} 0;
      font-size: ${size === 'lg' ? fontSizes(3) : fontSizes(2)};
      ${ns(css`
        font-size: ${size === 'lg' ? fontSizes(4) : fontSizes(2.5)};
      `)};
    `}
  >
    {emojis.map((emoji, index) => (
      <>
        <Emoji key={`${emoji}${index}`}>{emoji}</Emoji>{' '}
      </>
    ))}
  </Component>
)

export default EmojiSeparator
