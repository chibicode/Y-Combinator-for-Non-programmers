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

const widthAndHeight = (size: InlineEmojiBoxProps['size']) =>
  ({
    lg: 1.5,
    md: 1.25
  }[size])

const emojiSize = (size: InlineEmojiBoxProps['size']): 'md' | 'sm' =>
  ({
    lg: 'md' as 'md',
    md: 'sm' as 'sm'
  }[size])

const InlineEmojiBoxes = ({
  emojis,
  background,
  size
}: InlineEmojiBoxProps) => (
  <span
    css={css`
      display: inline-flex;
      vertical-align: ${size === 'lg' ? '-0.16em' : '-0.08em'};
      margin: 0 ${size === 'lg' ? spaces(0.25) : 0};
      background: ${background};
      font-size: 0.9em;
    `}
  >
    {emojis.map((emoji, i) => (
      <FlexCenter
        key={`${emoji}${i}`}
        css={css`
          width: ${widthAndHeight(size)}em;
          height: ${widthAndHeight(size)}em;
          border-top: 2px solid ${colors('indigo300')};
          border-bottom: 2px solid ${colors('indigo300')};
          border-left: 2px solid ${colors('indigo300')};
          border-right: 2px solid ${colors('indigo300')};
          margin-left: -1px;
          margin-right: -1px;
        `}
      >
        <Emoji noVerticalTransform size={emojiSize(size)}>
          {emoji}
        </Emoji>
      </FlexCenter>
    ))}
  </span>
)

InlineEmojiBoxes.defaultProps = {
  background: colors('white'),
  size: 'lg'
}

export default InlineEmojiBoxes
