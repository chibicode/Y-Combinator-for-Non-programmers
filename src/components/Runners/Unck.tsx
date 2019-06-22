import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/unck.json'

// @ts-ignore
const Unck = () => <ExpressionRunnerPrecomputed {...config} />

export default Unck
