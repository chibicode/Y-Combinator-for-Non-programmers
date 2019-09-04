import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/rwuw.json'

const Rwuw = ({ children }: { children?: React.ReactNode }) => (
  // @ts-ignore
  <ExpressionRunnerPrecomputed {...config}>
    {children}
  </ExpressionRunnerPrecomputed>
)

export default Rwuw
