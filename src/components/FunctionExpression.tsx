import React from 'react'
import Expression from '../components/Expression'
import ExpressionWrapper from '../components/ExpressionWrapper'
import Flex from '../components/Flex'
import InlineFlex from '../components/InlineFlex'

interface FunctionExpressionProps {
  expression: ExpressionTypes.FunctionExpression
  isOuterMost?: boolean
  borderType?: 'functionArgs'
}

const FunctionExpression: React.SFC<FunctionExpressionProps> = ({
  expression
}) => (
  <div>
    <Flex mb={2}>
      {expression.arg && (
        <InlineFlex px={1} key={`${expression.arg}`}>
          <ExpressionWrapper hasBorder>{expression.arg}</ExpressionWrapper>
        </InlineFlex>
      )}
    </Flex>
    <Flex alignItems="top">
      <Expression expression={expression.body} />
    </Flex>
  </div>
)

export default FunctionExpression
