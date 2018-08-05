import { css } from 'emotion'
import React from 'react'
import Box from 'src/components/Box'
import Flex from 'src/components/Flex'

interface ExpressionPrioritiesLabelProps {
  priorities: number[]
  // TODO: When TS 3 lands remove ? and !
  highlighted?: boolean
}

interface ExpressionPrioritiesLabelState {
  expanded: boolean
}

const ExpressionPrioritiesLabelDefault: React.SFC<
  ExpressionPrioritiesLabelProps
> = ({ priorities }) =>
  priorities.length > 0 ? (
    <Box position="relative">
      <Flex
        fontSize={1}
        fontWeight="bold"
        width={'1em'}
        height={'1.5em'}
        lineHeight={1}
        alignItems={'center'}
        justifyContent={'center'}
        border={2}
        borderColor="lightGray"
      >
        {priorities[0]}
      </Flex>
    </Box>
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
    const { priorities, highlighted } = this.props
    const { expanded } = this.state
    if (expanded) {
      return ''
    } else {
      return (
        <ExpressionPrioritiesLabelDefault
          priorities={priorities}
          highlighted={highlighted!}
        />
      )
    }
  }
}
