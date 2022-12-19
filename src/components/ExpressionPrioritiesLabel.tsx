import { css } from '@emotion/react'
import { useContext } from 'react'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionPriorityContext from 'src/components/ExpressionPriorityContext'
import ExpressionRunnerContext from 'src/components/ExpressionRunnerContext'
import { ExpressionRunnerContextProps } from 'src/types/ExpressionRunnerTypes'
import { colors, fontSizes, zIndices, radii } from 'src/lib/theme'

interface ExpressionPrioritiesLabelProps {
  emphasize: boolean
  priorities: number[]
  position: 'topleft' | 'bottomleft'
}

interface ExpressionPrioritiesLabelBoxProps {
  emphasize: boolean
  priority: number
  offset: number
  position: 'topleft' | 'bottomleft'
}

const fontSize = (
  variableSize: ExpressionRunnerContextProps['variableSize']
): string => {
  if (variableSize === 'lg') {
    return fontSizes(0.7)
  } else if (variableSize === 'md') {
    return fontSizes(0.65)
  } else if (variableSize === 'sm') {
    return fontSizes(0.6)
  } else {
    return fontSizes(0.5)
  }
}

const left = (
  variableSize: ExpressionRunnerContextProps['variableSize']
): number =>
  ({
    lg: -1,
    md: -0.925,
    sm: -0.85,
    xs: -0.7,
    xxs: -0.7,
    xxxs: -0.7
  }[variableSize])

const ExpressionPrioritiesLabelBox = ({
  emphasize,
  position,
  priority,
  offset
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
            white-space: nowrap;
            border-radius: ${radii(9999)};
          `,
          priority >= 10 &&
            css`
              letter-spacing: -0.1em;
            `
        ]}
      >
        {priority}
      </FlexCenter>
    </Flex>
  )
}

const ExpressionPrioritiesLabel = ({
  priorities,
  position,
  emphasize
}: ExpressionPrioritiesLabelProps) => {
  const { variableSize } = useContext(ExpressionRunnerContext)

  return (
    <div
      css={[
        css`
          position: absolute;
          z-index: ${zIndices('expressionPriorityNumber')};
          left: ${left(variableSize)}em;
          user-select: none;
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
