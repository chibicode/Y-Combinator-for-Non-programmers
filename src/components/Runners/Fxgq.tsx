import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/fxgq.json'

// @ts-ignore
const Fxgq = () => <ExpressionRunnerPrecomputed {...config} />

export default Fxgq
