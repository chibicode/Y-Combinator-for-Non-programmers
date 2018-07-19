import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Expression from '../components/Expression'
import ExpressionWrapper from '../components/ExpressionWrapper'
import Flex from '../components/Flex'
import InlineFlex from '../components/InlineFlex'

interface FunctionExpressionProps {
  expression: ExpressionTypes.FunctionExpression
  isOuterMost?: boolean
  borderType?: 'functionArgs'
  highlightVariable?: string
}

const FunctionExpression: React.SFC<FunctionExpressionProps> = ({
  expression,
  isOuterMost,
  highlightVariable
}) => (
  <div>
    <Flex mb={2}>
      {expression.arg && (
        <InlineFlex px={1} key={`${expression.arg}`}>
          <ExpressionWrapper borderStyle={isOuterMost ? 'solid' : 'dashed'}>
            {expression.arg}
          </ExpressionWrapper>
        </InlineFlex>
      )}
    </Flex>
    <Flex ml={2} alignItems="top">
      <InlineFlex color="darkYellow" p={2} m={2}>
        <FontAwesomeIcon
          icon={['fas', 'level-up']}
          transform={{ rotate: 90 }}
        />
      </InlineFlex>
      <Expression
        expression={expression.body}
        highlightVariable={isOuterMost ? expression.arg : highlightVariable}
      />
    </Flex>
  </div>
)

export default FunctionExpression
