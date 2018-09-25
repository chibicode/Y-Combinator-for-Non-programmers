import { css } from 'emotion'
import React from 'react'
import Emoji from 'src/components/Emoji'
import { fontSizes, ns, spaces } from 'src/lib/theme'

interface EmojiSeparatorProps {
  emojis: string[]
  size?: 'md' | 'lg'
}

const EmojiSeparator: React.SFC<EmojiSeparatorProps> = ({
  emojis,
  size = 'md'
}) => (
  <div
    className={css`
      text-align: center;
      margin: ${spaces(1.5)} 0;
      font-size: ${size === 'lg' ? fontSizes(3) : fontSizes(2)};
      ${ns(css`
        font-size: ${size === 'lg' ? fontSizes(4) : fontSizes(2.5)};
      `)};
    `}
  >
    {emojis.map((emoji, index) => (
      <>
        <Emoji key={index}>{emoji}</Emoji>{' '}
      </>
    ))}
  </div>
)

export default EmojiSeparator
