import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/osqg.json'

// @ts-ignore
const Osqg = () => <ExpressionRunnerPrecomputed {...config} />

export default Osqg
