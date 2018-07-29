import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import times from 'lodash/times'
import React from 'react'
import Expression from 'src/components/Expression'
import Flex from 'src/components/Flex'
import ExpressionTypes from 'src/types/ExpressionTypes'

interface CallProps {
  expression: ExpressionTypes.CallExpression
}

const stateToArrowsBgColor = {
  readyToHighlight: 'lightBlue',
  checkForConflictingVariables: 'lightRed',
  needsAlphaConvert: 'lightGreen',
  readyToBetaReduce: 'lightOrange'
}

const CallExpression: React.SFC<CallProps> = ({ expression }) => (
  <Flex flexDirection="column" flex={1}>
    {expression.priority && (
      <Flex
        justifyContent="center"
        borderBottom={2}
        borderColor="lightGray"
        color="lightGray"
        bg={stateToArrowsBgColor[expression.state]}
      >
        {times(expression.priority, () => (
          <FontAwesomeIcon icon="angle-down" />
        ))}
      </Flex>
    )}
    <Flex justifyContent="center" borderBottom={2} borderColor="lightGray">
      <Expression expression={expression.value.arg} />
    </Flex>
    <Flex justifyContent="center" borderBottom={2} borderColor="lightGray">
      <Expression expression={expression.value.func} />
    </Flex>
    {expression.priority && (
      <Flex
        justifyContent="center"
        borderColor="lightGray"
        width={1}
        color="lightGray"
        bg={stateToArrowsBgColor[expression.state]}
      >
        {times(expression.priority, () => <FontAwesomeIcon icon="angle-up" />)}
      </Flex>
    )}
  </Flex>
)

export default CallExpression
