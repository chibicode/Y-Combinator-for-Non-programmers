/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Emoji, { EmojiProps } from 'src/components/Emoji'
import CustomEmoji from 'src/components/CustomEmoji'
import numberEmojiMapping from 'src/lib/numberEmojiMapping'

interface EmojiNumberProps {
  number: number
  size: EmojiProps['size']
}

const numberToDigits = (x: number) => Array.from(String(x), Number)

const EmojiNumber = ({ number, size }: EmojiNumberProps) => {
  if (number <= 10) {
    return <Emoji size={size}>{numberEmojiMapping[number]}</Emoji>
  } else if (number === 20) {
    return <CustomEmoji size={size} type="twenty" />
  } else {
    return (
      <span
        css={css`
          display: inline-block;
          padding-right: 0.1em;
          padding-left: 0.1em;
        `}
      >
        {numberToDigits(number).map((digit, index) => (
          <Emoji
            size={size}
            key={`${digit}-${index}`}
            cssOverrides={css`
              margin-right: -0.1em;
              margin-left: -0.1em;
            `}
          >
            {numberEmojiMapping[digit]}
          </Emoji>
        ))}
      </span>
    )
  }
}

EmojiNumber.defaultProps = {
  size: 'md'
}

export default EmojiNumber
