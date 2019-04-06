/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionPriorityContext from 'src/components/Yc/ExpressionPriorityContext'
import ExpressionRunnerContext, {
  ExpressionRunnerContextProps
} from 'src/components/Yc/ExpressionRunnerContext'
import { colors, fontSizes, zIndices, radii } from 'src/lib/theme'

interface ExpressionPrioritiesLabelProps {
  emphasize: boolean
  priorities: number[]
  position: 'topleft' | 'bottomleft'
}

interface ExpressionPrioritiesLabelBox {
  emphasize: boolean
  priority: number
  offset: number
}

type ExpressionPrioritiesLabelDefaultProps = ExpressionPrioritiesLabelProps

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

const size = (
  variableSize: ExpressionRunnerContextProps['variableSize']
): number => {
  const multiplier = {
    lg: 1.07,
    md: 1,
    sm: 0.93
  }[variableSize]
  return 1.3 * multiplier
}

const ExpressionPrioritiesLabelBox = ({
  emphasize,
  priority,
  offset
}: ExpressionPrioritiesLabelBox) => {
  const { activePriority } = useContext(ExpressionPriorityContext)
  const { variableSize } = useContext(ExpressionRunnerContext)
  return (
    <Flex
      css={css`
        position: relative;
        left: ${-offset * 0.2 * size(variableSize)}em;
        z-index: ${-offset};
      `}
    >
      <FlexCenter
        css={css`
          color: ${colors(
            emphasize && activePriority === priority ? 'white' : 'indigo300'
          )};
          font-size: ${fontSize(variableSize)};
          font-weight: bold;
          width: ${size(variableSize)}em;
          height: ${size(variableSize)}em;
          line-height: 1;
          background: ${colors(
            emphasize && activePriority === priority ? 'pink400' : 'white'
          )};
          border: 2px solid ${colors('indigo300')};
          border-radius: ${radii(9999)};
        `}
      >
        {priority}
      </FlexCenter>
    </Flex>
  )
}

const ExpressionPrioritiesLabelExpanded = ({
  priorities,
  emphasize
}: ExpressionPrioritiesLabelDefaultProps) => (
  <Flex>
    {priorities.map((priority, index) => (
      <ExpressionPrioritiesLabelBox
        emphasize={emphasize}
        offset={index}
        key={priority}
        priority={priority}
      />
    ))}
  </Flex>
)

const ExpressionPrioritiesLabel = ({
  priorities,
  position,
  emphasize
}: ExpressionPrioritiesLabelProps) => {
  const { variableSize } = useContext(ExpressionRunnerContext)
  return (
    <div
      css={css`
        position: absolute;
        left: ${(-1 * size(variableSize)) / 2}em;
        ${
          position === 'topleft'
            ? css`
                top: ${(-1 * size(variableSize)) / 2}em;
              `
            : css`
                bottom: ${(-1 * size(variableSize)) / 2}em;
              `
        }
        z-index: ${zIndices('expressionPriorityNumberWrapperDefault')};
      `}
    >
      <ExpressionPrioritiesLabelExpanded
        priorities={priorities}
        emphasize={emphasize}
      />
    </div>
  )
}

export default ExpressionPrioritiesLabel
