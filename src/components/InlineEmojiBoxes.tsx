/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Emoji from 'src/components/Emoji'
import FlexCenter from 'src/components/FlexCenter'
import { colors, spaces } from 'src/lib/theme'
import ConditionalBorder, {
  ConditionalBorderProps
} from 'src/components/ConditionalBorder'

interface InlineEmojiBoxProps {
  emojis: string[]
  background: string
  borderBadge?: React.ReactNode
  size: 'md' | 'lg' | 'xl'
}

export const InlineEmojiBoxesForCondition = ({
  type
}: {
  type: ConditionalBorderProps['type']
}) => (
  <InlineEmojiBoxes
    size="xl"
    borderBadge={<ConditionalBorder variableSizeOverrides="md" type={type} />}
  />
)

export const InlineEmojiBoxesForQuestion = ({
  size,
  borderBadge
}: {
  size: InlineEmojiBoxProps['size']
  borderBadge?: React.ReactNode
}) => (
  <InlineEmojiBoxes
    emojis={['❔']}
    background={colors('indigo400')}
    size={size}
    borderBadge={borderBadge}
  />
)

InlineEmojiBoxesForQuestion.defaultProps = {
  size: 'lg'
}

const widthAndHeight = (size: InlineEmojiBoxProps['size']) =>
  ({
    xl: 2,
    lg: 1.5,
    md: 1.25
  }[size])

const emojiSize = (size: InlineEmojiBoxProps['size']): 'md' | 'sm' =>
  ({
    xl: 'md' as 'md',
    lg: 'md' as 'md',
    md: 'sm' as 'sm'
  }[size])

const Border = ({
  size,
  children
}: {
  size: InlineEmojiBoxProps['size']
  children: React.ReactNode
}) => (
  <FlexCenter
    css={css`
      width: ${widthAndHeight(size)}em;
      height: ${widthAndHeight(size)}em;
      border-top: 2px solid ${colors('indigo300')};
      border-bottom: 2px solid ${colors('indigo300')};
      border-left: 2px solid ${colors('indigo300')};
      border-right: 2px solid ${colors('indigo300')};
      margin-left: -1px;
      margin-right: -1px;
      position: relative;
    `}
  >
    {children}
  </FlexCenter>
)

const InlineEmojiBoxes = ({
  emojis,
  background,
  size,
  borderBadge
}: InlineEmojiBoxProps) => (
  <span
    css={css`
      display: inline-flex;
      vertical-align: ${size === 'lg'
        ? '-0.16em'
        : size === 'xl'
        ? 'middle'
        : '-0.08em'};
      margin: ${spaces(0.25)} ${size !== 'md' ? spaces(0.25) : 0};
      background: ${background};
      font-size: 0.9em;
    `}
  >
    {emojis.map((emoji, i) => (
      <Border size={size} key={`${emoji}${i}`}>
        <Emoji noVerticalTransform size={emojiSize(size)}>
          {emoji}
        </Emoji>
      </Border>
    ))}
    {borderBadge && <Border size={size}>{borderBadge}</Border>}
  </span>
)

InlineEmojiBoxes.defaultProps = {
  background: colors('white'),
  size: 'lg',
  emojis: []
}

export default InlineEmojiBoxes
