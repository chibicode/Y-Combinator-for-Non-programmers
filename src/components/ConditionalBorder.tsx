/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { useContext } from 'react'
import Emoji from 'src/components/Emoji'
import { zIndices, colors, fontSizes } from 'src/lib/theme'
import ExpressionRunnerContext from 'src/components/ExpressionRunnerContext'
import VariableShadeContext from 'src/components/VariableShadeContext'
import { ExpressionRunnerContextProps } from 'src/types/ExpressionRunnerTypes'
import EmojiNumber from 'src/components/EmojiNumber'
import CustomEmoji from 'src/components/CustomEmoji'

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

export const trueCaseColor = colors('orange100')
export const falseCaseColor = colors('red100')
export const conditionColor = colors('cyan100')

const Shade = () => (
  <span
    css={css`
      display: block;
      position: absolute;
      z-index: ${zIndices('conditionalBorderShade')};
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${colors('grey50033')};
    `}
  />
)

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
  const { shadeNonNumbers, shadeNonHighlightedFunc, shadeNonFactorial } =
    useContext(VariableShadeContext)
  return (
    <>
      {shaded && <Shade />}
      {type && (
        <span
          css={css`
            position: absolute;
            z-index: ${zIndices('badge')};
            top: 0.35em;
            left: 0.3em;
            display: inline-flex;
            font-size: ${fontSize(variableSizeOverrides || variableSize)};
            opacity: ${shadeNonNumbers ||
            shadeNonHighlightedFunc ||
            shadeNonFactorial
              ? 0.7
              : 1};
          `}
        >
          {type === 'trueCase' && (
            <EmojiNumber number={0} size={smallEmoji ? 'sm' : 'md'} />
          )}
          {type === 'falseCase' && (
            <Emoji size={smallEmoji ? 'sm' : 'md'}>🔢</Emoji>
          )}
          {type === 'condition' && (
            <CustomEmoji size={smallEmoji ? 'sm' : 'md'} type="condition" />
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
      >
        {(shadeNonNumbers || shadeNonHighlightedFunc || shadeNonFactorial) && (
          <Shade />
        )}
      </span>
    </>
  )
}

ConditionalBorder.defaultProps = {
  shaded: false
}

export default ConditionalBorder
