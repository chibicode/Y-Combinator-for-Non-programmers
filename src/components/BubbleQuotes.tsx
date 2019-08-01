/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Flex from 'src/components/Flex'
import Emoji from 'src/components/Emoji'
import { fontSizes, colors, spaces, radii, ns } from 'src/lib/theme'

interface BubbleQuoteProps {
  type:
    | 'person'
    | 'devil'
    | 'scared'
    | 'crying'
    | 'sad'
    | 'heart'
    | 'thinking'
    | 'brave'
    | 'surprised'
  children: React.ReactNode
}

const speakerToEmoji = (type: BubbleQuoteProps['type']) =>
  ({
    person: '🙂',
    scared: '😱',
    crying: '😭',
    sad: '😢',
    devil: '😈',
    heart: '😍',
    thinking: '🤔',
    brave: '😠',
    surprised: '😮'
  }[type])

const BubbleQuotes = ({ quotes }: { quotes: readonly BubbleQuoteProps[] }) => (
  <div
    css={css`
      margin: ${spaces(1.75)} 0 ${spaces(1.75)};
    `}
  >
    {quotes.map(({ type, children }, index) => (
      <Flex
        key={`${type}${index}`}
        css={css`
          margin: 0 0 ${spaces(1)};
          font-size: ${fontSizes(0.85)};
        `}
      >
        <span
          css={css`
            margin-right: ${spaces(0.5)};
            display: block;
            padding-top: ${spaces(0.75)};

            ${ns} {
              margin-right: ${spaces(0.75)};
              padding-top: ${spaces(1)};
            }
          `}
        >
          <Emoji size="lg">{speakerToEmoji(type)}</Emoji>
        </span>
        <span
          css={css`
            display: block;
            background: ${colors('white')};
            padding: ${spaces(0.75)} ${spaces(0.75)} 0;
            border-radius: ${radii(0.5)};

            ${ns} {
              padding: ${spaces(1)} ${spaces(1)} 0;
            }
          `}
        >
          {children}
        </span>
      </Flex>
    ))}
  </div>
)

export default BubbleQuotes
