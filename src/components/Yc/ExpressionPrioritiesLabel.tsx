/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionPriorityContext from 'src/components/Yc/ExpressionPriorityContext'
import Emoji from 'src/components/Emoji'
import ExpressionRunnerContext, {
  ExpressionRunnerContextProps
} from 'src/components/Yc/ExpressionRunnerContext'
import { colors, fontSizes, zIndices, radii } from 'src/lib/theme'

interface ExpressionPrioritiesLabelProps {
  emphasize: boolean
  priorities: number[]
  position: 'topleft' | 'bottomleft'
  removing?: boolean
}

interface ExpressionPrioritiesLabelBoxProps {
  emphasize: boolean
  priority: number
  offset: number
  position: 'topleft' | 'bottomleft'
  removing: boolean
}

const fontSize = (
  variableSize: ExpressionRunnerContextProps['variableSize']
): string => {
  if (variableSize === 'lg') {
    return fontSizes(0.75)
  } else if (variableSize === 'md') {
    return fontSizes(0.7)
  } else {
    return fontSizes(0.6)
  }
}

const emojiFontSize = (
  variableSize: ExpressionRunnerContextProps['variableSize']
): string => {
  if (variableSize === 'lg') {
    return fontSizes(1)
  } else if (variableSize === 'md') {
    return fontSizes(0.7)
  } else {
    return fontSizes(0.6)
  }
}

const width = (
  variableSize: ExpressionRunnerContextProps['variableSize']
): number => {
  const multiplier = {
    lg: 1.07,
    md: 0.9,
    sm: 0.75
  }[variableSize]
  return 1.3 * multiplier
}

const height = (
  variableSize: ExpressionRunnerContextProps['variableSize']
): number => {
  const multiplier = {
    lg: 1.07,
    md: 1,
    sm: 0.93
  }[variableSize]
  return 1.3 * multiplier
}

const left = (
  variableSize: ExpressionRunnerContextProps['variableSize']
): number =>
  ({
    lg: -1.291,
    md: -0.92,
    sm: -0.92
  }[variableSize])

const ExpressionPrioritiesLabelBox = ({
  emphasize,
  position,
  priority,
  offset,
  removing
}: ExpressionPrioritiesLabelBoxProps) => {
  const { activePriority } = useContext(ExpressionPriorityContext)
  const { variableSize } = useContext(ExpressionRunnerContext)
  return (
    <Flex
      css={[
        css`
          position: relative;
          z-index: ${-offset};
        `,
        variableSize === 'lg' &&
          position === 'topleft' &&
          css`
            top: ${-offset * 0.2 * width(variableSize)}em;
          `,
        variableSize === 'lg' &&
          position === 'bottomleft' &&
          css`
            bottom: ${-offset * 0.2 * width(variableSize)}em;
          `
      ]}
    >
      {removing && emphasize && activePriority === priority ? (
        <span
          css={css`
            font-size: ${emojiFontSize(variableSize)};
          `}
        >
          <Emoji>💥</Emoji>
        </span>
      ) : (
        <FlexCenter
          css={[
            css`
              color: ${colors(
                emphasize && activePriority === priority ? 'white' : 'indigo300'
              )};
              font-size: ${fontSize(variableSize)};
              font-weight: bold;
              width: ${width(variableSize)}em;
              height: ${height(variableSize)}em;
              line-height: 1;
              background: ${colors(
                emphasize && activePriority === priority
                  ? 'pink400'
                  : variableSize === 'lg'
                  ? 'white'
                  : 'transparent'
              )};
            `,
            variableSize === 'lg'
              ? css`
                  border: 2px solid ${colors('indigo300')};
                  border-radius: ${radii(9999)};
                `
              : position === 'topleft'
              ? css`
                  border-right: 2px solid ${colors('indigo300')};
                  border-bottom: 2px solid ${colors('indigo300')};
                `
              : css`
                  border-top: 2px solid ${colors('indigo300')};
                  border-right: 2px solid ${colors('indigo300')};
                `
          ]}
        >
          {priority}
        </FlexCenter>
      )}
    </Flex>
  )
}

const ExpressionPrioritiesLabel = ({
  priorities,
  position,
  emphasize,
  removing
}: ExpressionPrioritiesLabelProps) => {
  const { variableSize } = useContext(ExpressionRunnerContext)
  const { activePriority } = useContext(ExpressionPriorityContext)
  return (
    <div
      css={[
        css`
        position: absolute;
        ${
          position === 'topleft'
            ? css`
                top: 0;
              `
            : css`
                bottom: 0;
              `
        }
        z-index: ${zIndices('expressionPriorityNumberWrapperDefault')};
      `,
        css`
          left: ${variableSize === 'lg' ? left(variableSize) : 0}em;
        `
      ]}
    >
      <Flex
        css={css`
          flex-direction: ${variableSize === 'lg'
            ? position === 'topleft'
              ? 'column'
              : 'column-reverse'
            : 'row'};
        `}
      >
        {priorities.map((priority, index) => (
          <ExpressionPrioritiesLabelBox
            removing={!!removing && priority === activePriority}
            position={position}
            emphasize={emphasize}
            offset={index}
            key={priority}
            priority={priority}
          />
        ))}
      </Flex>
    </div>
  )
}

export default ExpressionPrioritiesLabel
