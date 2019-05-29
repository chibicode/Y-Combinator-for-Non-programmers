/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import Emoji from 'src/components/Emoji'
import { zIndices, colors, fontSizes } from 'src/lib/theme'
import ExpressionRunnerContext, {
  ExpressionRunnerContextProps
} from 'src/components/ExpressionRunnerContext'

export interface ConditionalBorderProps {
  smallEmoji?: boolean
  type: 'trueCase' | 'falseCase' | 'condition'
  shaded: boolean
}

const fontSize = (
  variableSize: ExpressionRunnerContextProps['variableSize']
): string => {
  if (variableSize === 'lg') {
    return fontSizes(1)
  } else if (variableSize === 'md') {
    return fontSizes(0.85)
  } else {
    return fontSizes(0.7)
  }
}

const width = (
  variableSize: ExpressionRunnerContextProps['variableSize']
): number => {
  if (variableSize === 'lg') {
    return 0.6
  } else if (variableSize === 'md') {
    return 0.5
  } else {
    return 0.4
  }
}

const ConditionalBorder = ({
  type,
  smallEmoji,
  shaded
}: ConditionalBorderProps) => {
  const { variableSize } = useContext(ExpressionRunnerContext)
  const color = {
    trueCase: colors('teal200'),
    falseCase: colors('pink200'),
    condition: colors('yellow400')
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
          background: ${shaded ? colors('grey50050') : 'transparent'};
        `}
      />
      {type && (
        <span
          css={css`
            position: absolute;
            z-index: ${zIndices('badge')};
            top: 4px;
            left: 2px;
            display: inline-flex;
            font-size: ${fontSize(variableSize)};
          `}
        >
          {type === 'trueCase' && (
            <Emoji size={smallEmoji ? 'sm' : 'md'}>0️⃣</Emoji>
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
          border-right: 2px solid ${colors('indigo300')};
        `}
      />
    </>
  )
}

ConditionalBorder.defaultProps = {
  shaded: false
}

export default ConditionalBorder
