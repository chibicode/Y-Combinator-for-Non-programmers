/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Flex from 'src/components/Flex'
import Emoji from 'src/components/Emoji'
import { colors, spaces, radii, ns } from 'src/lib/theme'
import BubbleQuoteContext from 'src/components/BubbleQuoteContext'

interface BubbleQuoteProps {
  type:
    | 'devil'
    | 'scared'
    | 'crying'
    | 'sad'
    | 'heart'
    | 'thinking'
    | 'brave'
    | 'surprised'
    | 'happy'
    | 'smile'
    | 'celebrate'
    | 'relieved'
    | 'wink'
    | 'dog'
    | 'roll'
    | 'saya'
    | 'tired'
    | 'manLightSkinWhiteHair'
  children: React.ReactNode
}

const speakerToEmoji = (type: BubbleQuoteProps['type']) =>
  ({
    scared: '😱',
    crying: '😭',
    sad: '😢',
    devil: '😈',
    heart: '😍',
    thinking: '🤔',
    brave: '😠',
    surprised: '😮',
    happy: '😁',
    smile: '🙂',
    celebrate: '🥳',
    relieved: '😅',
    wink: '😉',
    dog: '🐶',
    roll: '😒',
    saya: '👧🏻',
    tired: '😵',
    manLightSkinWhiteHair: '👨🏻‍🦳'
  }[type])

const BubbleQuotes = ({ quotes }: { quotes: readonly BubbleQuoteProps[] }) => (
  <div
    css={css`
      margin-top: ${spaces(1.75)};
      margin-bottom: ${spaces(1.75)};
      margin-left: ${spaces('-0.5')};
      margin-right: ${spaces('-0.25')};

      ${ns} {
        margin-left: 0;
      }
    `}
  >
    {quotes.map(({ type, children }, index) => (
      <Flex
        key={`${type}${index}`}
        css={css`
          margin: 0 0 ${spaces(1)};
        `}
      >
        <BubbleQuoteContext.Provider value={{ inQuote: true }}>
          <span
            css={css`
              margin-right: ${spaces(0.25)};
              display: block;
              padding-top: ${spaces(0.75)};

              ${ns} {
                margin-right: ${spaces(0.75)};
                padding-top: ${spaces(1)};
              }
            `}
          >
            <Emoji size="semilg">{speakerToEmoji(type)}</Emoji>
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
        </BubbleQuoteContext.Provider>
      </Flex>
    ))}
  </div>
)

export default BubbleQuotes
