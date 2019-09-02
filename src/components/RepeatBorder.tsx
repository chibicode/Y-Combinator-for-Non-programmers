/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import { zIndices, colors, fontSizes } from 'src/lib/theme'
import ExpressionRunnerContext from 'src/components/ExpressionRunnerContext'
import letterEmojiMapping from 'src/lib/letterEmojiMapping'
import { ExpressionRunnerContextProps } from 'src/types/ExpressionRunnerTypes'
import EmojiNumber from 'src/components/EmojiNumber'
import Emoji from 'src/components/Emoji'
import CustomEmoji from 'src/components/CustomEmoji'
import { VariableNames } from 'src/types/VariableNames'

export interface RepeatBorderProps {
  count: number
  countVariable?: VariableNames
  variableSizeOverrides?: ExpressionRunnerContextProps['variableSize']
}

export const repeatColor = colors('blue100')

const fontSize = (
  variableSize: ExpressionRunnerContextProps['variableSize']
): string => {
  if (variableSize === 'lg') {
    return fontSizes(1.2)
  } else if (variableSize === 'md') {
    return fontSizes(1)
  } else if (variableSize === 'sm') {
    return fontSizes(0.85)
  } else {
    return fontSizes(0.7)
  }
}

const width = (
  variableSize: ExpressionRunnerContextProps['variableSize']
): number => {
  if (variableSize === 'lg') {
    return 2.1
  } else if (variableSize === 'md') {
    return 1.8
  } else if (variableSize === 'sm') {
    return 1.5
  } else {
    return 1.25
  }
}

const RepeatBorder = ({
  count,
  countVariable,
  variableSizeOverrides
}: RepeatBorderProps) => {
  const { variableSize } = useContext(ExpressionRunnerContext)
  return (
    <>
      <span
        css={css`
          display: block;
          position: absolute;
          z-index: ${zIndices('conditionalBorderShade')};
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        `}
      />
      <span
        css={css`
          position: absolute;
          z-index: ${zIndices('badge')};
          top: 0.35em;
          left: 0.3em;
          display: inline-flex;
          flex-direction: column;
          font-size: ${fontSize(variableSizeOverrides || variableSize)};
        `}
      >
        {countVariable ? (
          countVariable === 'blankNumber' ? (
            <CustomEmoji type="blankNumber" />
          ) : (
            <Emoji>{letterEmojiMapping[countVariable]}</Emoji>
          )
        ) : (
          <EmojiNumber number={count} />
        )}
      </span>
      <span
        css={css`
          display: block;
          position: absolute;
          z-index: ${zIndices('conditionalBorder')};
          top: 0;
          left: 0;
          bottom: 0;
          width: ${width(variableSize)}em;
          background: ${repeatColor};
          border-left: 2px solid ${colors('indigo300')};
          border-right: 2px solid ${colors('indigo300')};
          border-top: 2px solid ${colors('indigo300')};
        `}
      />
    </>
  )
}

RepeatBorder.defaultProps = {
  count: 0
}

export default RepeatBorder
