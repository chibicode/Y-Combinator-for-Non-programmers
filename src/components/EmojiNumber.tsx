/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Emoji, { EmojiProps } from 'src/components/Emoji'
import numberEmojiMapping, {
  numberEmojiMappingMultipleDigits
} from 'src/lib/numberEmojiMapping'

interface EmojiNumberProps {
  number: number
  size: EmojiProps['size']
}

const EmojiNumber = ({ number, size }: EmojiNumberProps) => {
  if (number < 10) {
    return <Emoji size={size}>{numberEmojiMapping[number]}</Emoji>
  } else {
    return (
      <>
        {numberEmojiMappingMultipleDigits[number].map((emoji, index) => (
          <Emoji
            size={size}
            key={`${emoji}-${index}`}
            cssOverrides={css`
              margin-right: -0.15em;
              margin-left: -0.15em;
            `}
          >
            {emoji}
          </Emoji>
        ))}
      </>
    )
  }
}

EmojiNumber.defaultProps = {
  size: 'md'
}

export default EmojiNumber
