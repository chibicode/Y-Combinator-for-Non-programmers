/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionPriorityContext from 'src/components/Yc/ExpressionPriorityContext'
import ExpressionRunnerContext, {
  ExpressionRunnerContextProps
} from 'src/components/Yc/ExpressionRunnerContext'
import { colors, fontSizes, zIndices } from 'src/lib/theme'
import { allFontSizes } from 'src/lib/theme/fontSizes'
export const jsxBabelFix = jsx

interface ExpressionPrioritiesLabelProps {
  emphasize: boolean
  priorities: number[]
  position: 'topleft' | 'bottomleft'
}

interface ExpressionPrioritiesLabelBox {
  emphasize: boolean
  priority: number
  position: ExpressionPrioritiesLabelProps['position']
  collapsed: boolean
}

type ExpressionPrioritiesLabelDefaultProps = ExpressionPrioritiesLabelProps

const fontSize = (
  variableSize: ExpressionRunnerContextProps['variableSize']
): keyof typeof allFontSizes => {
  if (variableSize === 'lg') {
    return 0.75
  } else if (variableSize === 'md') {
    return 0.7
  } else {
    return 0.6
  }
}

const width = (
  variableSize: ExpressionRunnerContextProps['variableSize'],
  collapsed: boolean
): number => {
  const multiplier = {
    lg: 1.07,
    md: 1,
    sm: 0.93
  }[variableSize]
  return (collapsed ? 2 : 1.2) * multiplier
}

const height = (
  variableSize: ExpressionRunnerContextProps['variableSize']
): number => {
  const multiplier = {
    lg: 1.07,
    md: 1,
    sm: 1
  }[variableSize]
  return 1.3 * multiplier
}

const ExpressionPrioritiesLabelBox = ({
  emphasize,
  priority,
  position,
  collapsed
}: ExpressionPrioritiesLabelBox) => (
  <ExpressionPriorityContext.Consumer>
    {({ activePriority }) => (
      <ExpressionRunnerContext.Consumer>
        {({ variableSize }) => (
          <Flex>
            <FlexCenter
              css={css`
                color: ${colors(
                  emphasize && activePriority === priority
                    ? 'white'
                    : 'indigo300'
                )};
                font-size: ${fontSizes(fontSize(variableSize))};
                font-weight: bold;
                width: ${width(variableSize, collapsed)}em;
                height: ${height(variableSize)}em;
                line-height: 1;
                background: ${colors(
                  emphasize && activePriority === priority
                    ? 'pink400'
                    : 'transparent'
                )};
                ${position === 'topleft'
                  ? css`
                      border-right: 2px solid ${colors('indigo300')};
                      border-bottom: 2px solid ${colors('indigo300')};
                    `
                  : css`
                      border-top: 2px solid ${colors('indigo300')};
                      border-right: 2px solid ${colors('indigo300')};
                    `};
              `}
            >
              <div
                css={
                  position === 'bottomleft' &&
                  css`
                    transform: translateY(-1px);
                  `
                }
              >
                {priority}
              </div>
            </FlexCenter>
          </Flex>
        )}
      </ExpressionRunnerContext.Consumer>
    )}
  </ExpressionPriorityContext.Consumer>
)

const ExpressionPrioritiesLabelExpanded = ({
  priorities,
  position,
  emphasize
}: ExpressionPrioritiesLabelDefaultProps) => (
  <Flex>
    {priorities.map(priority => (
      <ExpressionPrioritiesLabelBox
        emphasize={emphasize}
        position={position}
        key={priority}
        collapsed={false}
        priority={priority}
      />
    ))}
  </Flex>
)

const ExpressionPrioritiesLabel = ({
  priorities,
  position,
  emphasize
}: ExpressionPrioritiesLabelProps) => (
  <div
    css={css`
        position: absolute;
        left: 0px;
        ${
          position === 'topleft'
            ? css`
                top: 0px;
              `
            : css`
                bottom: 0px;
              `
        }
        z-index: ${zIndices('expressionPriorityNumberWrapperDefault')};
      `}
  >
    <ExpressionPrioritiesLabelExpanded
      priorities={priorities}
      emphasize={emphasize}
      position={position}
    />
  </div>
)

export default ExpressionPrioritiesLabel
