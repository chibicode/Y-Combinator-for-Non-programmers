import { css } from 'emotion'
import React from 'react'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import { colors, fontSizes, zIndices } from 'src/lib/theme'

interface ExpressionPrioritiesLabelProps {
  priorities: number[]
  position: 'topleft' | 'bottomleft'
}

interface ExpressionPrioritiesLabelState {
  collapsed: boolean
}

type ExpressionPrioritiesLabelDefaultProps = ExpressionPrioritiesLabelProps

const ExpressionPrioritiesLabelBox: React.SFC<{
  children: React.ReactNode
  position: ExpressionPrioritiesLabelProps['position']
  collapsed: boolean
}> = ({ children, position, collapsed }) => (
  <Flex>
    <FlexCenter
      className={css`
        color: ${colors('indigo300')};
        font-size: ${fontSizes(0.7)};
        font-weight: bold;
        width: ${collapsed ? 2 : 1.25}em;
        height: 1.5em;
        line-height: 1;
        background: #fff;
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
