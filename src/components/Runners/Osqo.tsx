import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/osqo'

const Osqo = () => <ExpressionRunnerPrecomputed {...config} />

export default Osqo
