/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import Emoji from 'src/components/Emoji'
import { zIndices, colors, fontSizes } from 'src/lib/theme'
import ExpressionRunnerContext from 'src/components/ExpressionRunnerContext'
import { ExpressionRunnerContextProps } from 'src/types/ExpressionRunnerTypes'
import EmojiNumber from 'src/components/EmojiNumber'

export interface ConditionalBorderProps {
  smallEmoji?: boolean
  type: 'trueCase' | 'falseCase' | 'condition'
  shaded: boolean
  variableSizeOverrides?: ExpressionRunnerContextProps['variableSize']
}

const fontSize = (
  variableSize: ExpressionRunnerContextProps['variableSize']
): string => {
  if (variableSize === 'lg') {
    return fontSizes(1.2)
  } else if (variableSize === 'md') {
    return fontSizes(1)
  } else {
    return fontSizes(0.85)
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
    return 1.6
  } else {
    return 1.55
  }
}

export const trueCaseColor = colors('deepPurple100')
export const falseCaseColor = colors('pink100')
export const conditionColor = colors('grey300')

const ConditionalBorder = ({
  type,
  smallEmoji,
  shaded,
  variableSizeOverrides
}: ConditionalBorderProps) => {
  const { variableSize } = useContext(ExpressionRunnerContext)
  const color = {
    trueCase: trueCaseColor,
    falseCase: falseCaseColor,
    condition: conditionColor
  }[type]
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
          background: ${shaded ? colors('grey50033') : 'transparent'};
        `}
      />
      {type && (
        <span
          css={css`
            position: absolute;
            z-index: ${zIndices('badge')};
            top: 0.35em;
            left: 0.3em;
            display: inline-flex;
            font-size: ${fontSize(variableSizeOverrides || variableSize)};
          `}
        >
          {type === 'trueCase' && (
            <EmojiNumber number={0} size={smallEmoji ? 'sm' : 'md'} />
          )}
          {type === 'falseCase' && (
            <Emoji size={smallEmoji ? 'sm' : 'md'}>🔢</Emoji>
          )}
          {type === 'condition' && (
            <Emoji size={smallEmoji ? 'sm' : 'md'}>↕️</Emoji>
          )}
        </span>
      )}
      <span
        css={css`
          display: block;
          position: absolute;
          z-index: ${zIndices('conditionalBorder')};
          top: 0;
          left: 0;
          bottom: 0;
          width: ${width(variableSize)}em;
          background: ${color};
          border-left: 2px solid ${colors('indigo300')};
          border-right: 2px solid ${colors('indigo300')};
          border-top: 2px solid ${colors('indigo300')};
        `}
      />
    </>
  )
}

ConditionalBorder.defaultProps = {
  shaded: false
}

export default ConditionalBorder
