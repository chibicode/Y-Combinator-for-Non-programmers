import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/awwn.json'

const Awwn = ({ children }: { children?: React.ReactNode }) => (
  // @ts-ignore
  <ExpressionRunnerPrecomputed {...config}>
    {children}
  </ExpressionRunnerPrecomputed>
)

export default Awwn
