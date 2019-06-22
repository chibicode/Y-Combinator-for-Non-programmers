import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/rzbq.json'

// @ts-ignore
const Rzbq = () => <ExpressionRunnerPrecomputed {...config} />

export default Rzbq
