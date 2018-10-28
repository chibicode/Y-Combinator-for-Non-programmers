import { css } from 'emotion'
import React from 'react'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionRunnerContext from 'src/components/Yc/ExpressionRunnerContext'
import { colors, fontSizes, zIndices } from 'src/lib/theme'

interface ExpressionPrioritiesLabelProps {
  emphasizeOne: boolean
  priorities: number[]
  position: 'topleft' | 'bottomleft'
}

interface ExpressionPrioritiesLabelBox {
  emphasizeOne: boolean
  priority: number
  position: ExpressionPrioritiesLabelProps['position']
  collapsed: boolean
}

interface ExpressionPrioritiesLabelState {
  collapsed: boolean
}

type ExpressionPrioritiesLabelDefaultProps = ExpressionPrioritiesLabelProps

const ExpressionPrioritiesLabelBox: React.SFC<ExpressionPrioritiesLabelBox> = ({
  emphasizeOne,
  priority,
  position,
  collapsed
}) => (
  <ExpressionRunnerContext.Consumer>
    {({ variableSize }) => (
      <Flex>
        <FlexCenter
          className={css`
            color: ${colors(
              emphasizeOne && priority === 1 ? 'white' : 'indigo300'
            )};
            font-size: ${fontSizes(variableSize === 'lg' ? 0.75 : 0.7)};
            font-weight: bold;
            width: ${(collapsed ? 2 : 1.2) *
              (variableSize === 'lg' ? 1.07 : 1)}em;
            height: ${1.3 * (variableSize === 'lg' ? 1.07 : 1)}em;
            line-height: 1;
            background: ${colors(
              emphasizeOne && priority === 1 ? 'pink400' : 'transparent'
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
          {priority}
        </FlexCenter>
      </Flex>
    )}
  </ExpressionRunnerContext.Consumer>
)

const ExpressionPrioritiesLabelExpanded: React.SFC<
  ExpressionPrioritiesLabelDefaultProps
> = ({ priorities, position, emphasizeOne }) => (
  <Flex>
    {priorities.map(priority => (
      <ExpressionPrioritiesLabelBox
        emphasizeOne={emphasizeOne}
        position={position}
        key={priority}
        collapsed={false}
        priority={priority}
      />
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
    const { priorities, position, emphasizeOne } = this.props
    const { collapsed } = this.state
    if (collapsed) {
      // TODO
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
            z-index: ${zIndices('expressionPriorityNumberWrapperDefault')};
          `}
        >
          <ExpressionPrioritiesLabelExpanded
            priorities={priorities}
            emphasizeOne={emphasizeOne}
            position={position}
          />
        </div>
      )
    }
  }
}
