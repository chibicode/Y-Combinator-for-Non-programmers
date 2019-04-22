/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Emoji from 'src/components/Emoji'
import FlexCenter from 'src/components/FlexCenter'
import { colors, spaces } from 'src/lib/theme'

interface InlineEmojiBoxProps {
  emojis: string[]
  background: string
  size: 'md' | 'lg'
}

export const InlineEmojiBoxesForQuestion = ({
  size
}: {
  size: InlineEmojiBoxProps['size']
}) => (
  <InlineEmojiBoxes
    emojis={['❔']}
    background={colors('indigo400')}
    size={size}
  />
)

InlineEmojiBoxesForQuestion.defaultProps = {
  size: 'lg'
}

const InlineEmojiBoxes = ({
  emojis,
  background,
  size
}: InlineEmojiBoxProps) => (
  <span
    css={css`
      display: inline-flex;
      vertical-align: ${size === 'lg' ? '-0.25em' : '-0.2em'};
      margin: 0 ${size === 'lg' ? spaces(0.25) : 0};
      background: ${background};
    `}
  >
    {emojis.map((emoji, i) => (
      <FlexCenter
        key={`${emoji}${i}`}
        css={css`
          width: ${size === 'lg' ? '1.5em' : '1.25em'};
          height: ${size === 'lg' ? '1.5em' : '1.25em'};
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

InlineEmojiBoxes.defaultProps = {
  background: colors('white'),
  size: 'lg'
}

export default InlineEmojiBoxes
