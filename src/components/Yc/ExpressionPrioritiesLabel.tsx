import { css } from 'emotion'
import React from 'react'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import { readyToHighlightToColor } from 'src/components/Yc/BorderWrapper'
import ExpressionReadyToHighlightContext from 'src/components/Yc/ExpressionReadyToHighlightContext'
import ExpressionRunnerContext from 'src/components/Yc/ExpressionRunnerContext'
import { colors, fontSizes, zIndices } from 'src/lib/theme'

interface ExpressionPrioritiesLabelProps {
  priorities: number[]
  position: 'topleft' | 'bottomleft'
}

interface ExpressionPrioritiesLabelBox {
  children: React.ReactNode
  position: ExpressionPrioritiesLabelProps['position']
  collapsed: boolean
}

interface ExpressionPrioritiesLabelState {
  collapsed: boolean
}

type ExpressionPrioritiesLabelDefaultProps = ExpressionPrioritiesLabelProps

const ExpressionPrioritiesLabelBox: React.SFC<ExpressionPrioritiesLabelBox> = ({
  children,
  position,
  collapsed
}) => (
  <ExpressionReadyToHighlightContext.Consumer>
    {({ readyToHighlight, disableReadyToHighlightColoring }) => (
      <ExpressionRunnerContext.Consumer>
        {({ variableSize }) => (
          <Flex>
            <FlexCenter
              className={css`
                color: ${colors('indigo300')};
                font-size: ${fontSizes(variableSize === 'lg' ? 0.75 : 0.7)};
                font-weight: bold;
                width: ${(collapsed ? 2 : 1.25) *
                  (variableSize === 'lg' ? 1.07 : 1)}em;
                height: ${1.5 * (variableSize === 'lg' ? 1.07 : 1)}em;
                line-height: 1;
                background: ${colors(
                  readyToHighlightToColor(
                    disableReadyToHighlightColoring || readyToHighlight
                  )
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
              {children}
            </FlexCenter>
          </Flex>
        )}
      </ExpressionRunnerContext.Consumer>
    )}
  </ExpressionReadyToHighlightContext.Consumer>
)

const ExpressionPrioritiesLabelExpanded: React.SFC<
  ExpressionPrioritiesLabelDefaultProps
> = ({ priorities, position }) => (
  <Flex>
    {priorities.map(priority => (
      <ExpressionPrioritiesLabelBox
        position={position}
        key={priority}
        collapsed={false}
      >
        {priority}
      </ExpressionPrioritiesLabelBox>
    ))}
  </Flex>
)

export default class ExpressionPrioritiesLabel extends React.Component<
  ExpressionPrioritiesLabelProps,
  ExpressionPrioritiesLabelState
> {
  public state = {
    collapsed: false
  }

  public render() {
    const { priorities, position } = this.props
    const { collapsed } = this.state
    if (collapsed) {
      return ''
    } else {
      return (
        <div
          className={css`
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
            z-index: ${zIndices('expressionPriorityNumberWrapperInactive')};
          `}
        >
          <ExpressionPrioritiesLabelExpanded
            priorities={priorities}
            position={position}
          />
        </div>
      )
    }
  }
}
