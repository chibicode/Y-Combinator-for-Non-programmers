/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Flex from 'src/components/Flex'
import Emoji from 'src/components/Emoji'
import { colors, spaces, radii } from 'src/lib/theme'

interface BubbleQuoteProps {
  speaker: 'person' | 'devil'
  children: React.ReactNode
}

const speakerToEmoji = (speaker: BubbleQuoteProps['speaker']) =>
  ({
    person: '🙂',
    devil: '😈'
  }[speaker])

const BubbleQuote = ({ speaker, children }: BubbleQuoteProps) => (
  <Flex
    css={css`
      margin: ${spaces(1.5)} 0;
    `}
  >
    <span
      css={css`
        margin-right: ${spaces(0.5)};
        display: block;
        padding-top: ${spaces(1)};
      `}
    >
      <Emoji size="lg">{speakerToEmoji(speaker)}</Emoji>
    </span>
    <span
      css={css`
        display: block;
        flex: 1;
        background: ${colors('white')};
        padding: ${spaces(1)} ${spaces(1)} 0;
        border-radius: ${radii(0.5)};
      `}
    >
      {children}
    </span>
  </Flex>
)

export default BubbleQuote
