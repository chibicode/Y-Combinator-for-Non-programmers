import { css } from 'emotion'
import React from 'react'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import colors from 'src/lib/theme/colors'
import fontSizes from 'src/lib/theme/fontSizes'
import zIndices from 'src/lib/theme/zIndices'

interface ExpressionPrioritiesLabelProps {
  priorities: number[]
  // TODO: When TS 3 lands remove ? and !
  highlighted?: boolean
  position: 'topleft' | 'bottomleft'
}

interface ExpressionPrioritiesLabelState {
  expanded: boolean
}

type ExpressionPrioritiesLabelDefaultProps = ExpressionPrioritiesLabelProps

const ExpressionPrioritiesLabelDefault: React.SFC<
  ExpressionPrioritiesLabelDefaultProps
> = ({ priorities, position }) =>
  priorities.length > 0 ? (
    <Flex>
      <FlexCenter
        className={css`
          color: ${colors('indigo300')};
          font-size: ${fontSizes(0.7)};
          font-weight: bold;
          width: ${priorities.length > 1 ? 2 : 1.25}em;
          height: 1.5em;
          line-height: 1;
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
        {priorities[0]}
        {priorities.length > 1 && '+'}
      </FlexCenter>
    </Flex>
  ) : null

export default class ExpressionPrioritiesLabel extends React.Component<
  ExpressionPrioritiesLabelProps,
  ExpressionPrioritiesLabelState
> {
  public static defaultProps = {
    highlighted: false
  }

  public state = {
    expanded: false
  }

  public render() {
    const { priorities, highlighted, position } = this.props
    const { expanded } = this.state
    if (expanded) {
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
          <ExpressionPrioritiesLabelDefault
            priorities={priorities}
            position={position}
            highlighted={highlighted!}
          />
        </div>
      )
    }
  }
}
