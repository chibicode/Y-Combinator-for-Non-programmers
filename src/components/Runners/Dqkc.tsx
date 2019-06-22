import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/dqkc.json'

// @ts-ignore
const Dqkc = () => <ExpressionRunnerPrecomputed {...config} />

export default Dqkc
