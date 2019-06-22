import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/osqo.json'

// @ts-ignore
const Osqo = () => <ExpressionRunnerPrecomputed {...config} />

export default Osqo
