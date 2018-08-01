import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import times from 'lodash/times'
import React from 'react'
import ExpressionBox from 'src/components/ExpressionBox'
import Flex from 'src/components/Flex'
import { CallExpressionStates } from 'src/types/ExpressionTypes'
import { PrioritizedCallExpression } from 'src/types/PrioritizedExpressionTypes'

interface CallProps {
  expression: PrioritizedCallExpression
}

const stateToArrowsBgColor = (x: CallExpressionStates): string | undefined => {
  switch (x) {
    case 'readyToHighlight':
      return 'lightBlue'
    case 'checkForConflictingVariables':
      return 'lightRed'
    case 'needsAlphaConvert':
      return 'lightGreen'
    case 'readyToBetaReduce':
      return 'lightOrange'
    case 'readyToHighlight':
      return 'lightBlue'
  }
}

const CallExpressionBox: React.SFC<CallProps> = ({ expression }) => (
  <Flex flexDirection="column" flex={1}>
    {
      <Flex
        justifyContent="center"
        borderBottom={2}
        borderColor="lightGray"
        color="lightGray"
        bg={stateToArrowsBgColor(expression.state)}
      >
        {times(expression.priority, () => (
          <FontAwesomeIcon icon="angle-down" />
        ))}
      </Flex>
    }
    <Flex justifyContent="center" borderBottom={2} borderColor="lightGray">
      <ExpressionBox expression={expression.arg} />
    </Flex>
    <Flex justifyContent="center" borderBottom={2} borderColor="lightGray">
      <ExpressionBox expression={expression.func} />
    </Flex>
    {
      <Flex
        justifyContent="center"
        borderColor="lightGray"
        width={1}
        color="lightGray"
        bg={stateToArrowsBgColor(expression.state)}
      >
        {times(expression.priority, () => (
          <FontAwesomeIcon icon="angle-up" />
        ))}
      </Flex>
    }
  </Flex>
)

export default CallExpressionBox
