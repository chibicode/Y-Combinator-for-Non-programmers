/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionPriorityContext from 'src/components/ExpressionPriorityContext'
import Emoji from 'src/components/Emoji'
import ExpressionRunnerContext, {
  ExpressionRunnerContextProps
} from 'src/components/ExpressionRunnerContext'
import { colors, fontSizes, zIndices, radii } from 'src/lib/theme'

interface ExpressionPrioritiesLabelProps {
  emphasize: boolean
  priorities: number[]
  position: 'topleft' | 'bottomleft'
  removing?: boolean
  hideActive: boolean
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
    return fontSizes(0.7)
  } else if (variableSize === 'md') {
    return fontSizes(0.6)
  } else {
    return fontSizes(0.5)
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

const left = (
  variableSize: ExpressionRunnerContextProps['variableSize']
): number =>
  ({
    lg: -1,
    md: -0.85,
    sm: -0.7
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
  const width = 1.5
  const height = 1.5

  return (
    <Flex
      css={[
        css`
          position: relative;
          z-index: ${-offset};
        `,
        position === 'topleft' &&
          css`
            top: ${-offset * 0.15 * width}em;
          `,
        position === 'bottomleft' &&
          css`
            bottom: ${-offset * 0.15 * width}em;
          `
      ]}
    >
      {removing && emphasize && activePriority === priority ? (
        <span
          css={css`
            font-size: ${emojiFontSize(variableSize)};
            margin-left: -0.05em;
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
              width: ${width}em;
              height: ${height}em;
              line-height: 1;
              background: ${colors(
                emphasize && activePriority === priority ? 'pink400' : 'white'
              )};
              border: 2px solid ${colors('indigo300')};
              border-radius: ${radii(9999)};
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
  hideActive,
  removing
}: ExpressionPrioritiesLabelProps) => {
  const { variableSize } = useContext(ExpressionRunnerContext)
  const { activePriority } = useContext(ExpressionPriorityContext)

  if (hideActive) {
    priorities = priorities.filter(x => x !== activePriority)
  }
  return (
    <div
      css={[
        css`
          position: absolute;
          z-index: ${zIndices('expressionPriorityNumber')};
          left: ${left(variableSize)}em;
        `,
        position === 'topleft'
          ? css`
              top: 0;
            `
          : css`
              bottom: 0;
            `
      ]}
    >
      <Flex
        css={css`
          flex-direction: ${position === 'topleft'
            ? 'column'
            : 'column-reverse'};
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
