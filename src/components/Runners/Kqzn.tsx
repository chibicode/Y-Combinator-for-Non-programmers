import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/kqzn.json'

// @ts-ignore
const Kqzn = () => <ExpressionRunnerPrecomputed {...config} />

export default Kqzn
