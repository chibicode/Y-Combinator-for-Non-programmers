import React from 'react'
import Expression from '../components/Expression'
import InlineFlex from '../components/InlineFlex'

const SumExpression: React.SFC<{
  expression: ExpressionTypes.SumExpression
}> = ({ expression }) => (
  <InlineFlex alignItems="center">
    <InlineFlex>
      <Expression expression={expression.left} />
    </InlineFlex>
    <InlineFlex>+</InlineFlex>
    <InlineFlex>
      <Expression expression={expression.right} />
    </InlineFlex>
  </InlineFlex>
)

export default SumExpression
