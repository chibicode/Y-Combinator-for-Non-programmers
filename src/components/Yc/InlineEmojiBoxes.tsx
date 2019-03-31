/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Emoji from 'src/components/Emoji'
import FlexCenter from 'src/components/FlexCenter'
import { colors, fontSizes, lineHeights, spaces } from 'src/lib/theme'

interface InlineEmojiBoxProps {
  emojis: string[]
}

const InlineEmojiBoxes = ({ emojis }: InlineEmojiBoxProps) => (
  <span
    css={css`
      display: inline-flex;
      vertical-align: middle;
      font-size: ${fontSizes(1.2)};
      line-height: ${lineHeights(1.3, { ignoreLocale: true })};
      margin: ${spaces(0.25)} ${spaces(0.25)};
      background: ${colors('white')};
    `}
  >
    {emojis.map((emoji, i) => (
      <FlexCenter
        key={`${emoji}${i}`}
        css={css`
          width: 1.5em;
          height: 1.5em;
          border-top: 2px solid ${colors('indigo300')};
          border-bottom: 2px solid ${colors('indigo300')};
          border-left: 2px solid ${colors('indigo300')};
          border-right: 2px solid ${colors('indigo300')};
          margin-left: -1px;
          margin-right: -1px;
        `}
      >
        <Emoji noVerticalTransform>{emoji}</Emoji>
      </FlexCenter>
    ))}
  </span>
)

export default InlineEmojiBoxes
