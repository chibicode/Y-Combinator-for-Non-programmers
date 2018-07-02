import React from 'react'

const SumExpression: React.SFC<> = ({ expression }) => (
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
