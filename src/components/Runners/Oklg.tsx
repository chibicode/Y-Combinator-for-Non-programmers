import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/oklg.json'

// @ts-ignore
const Oklg = () => <ExpressionRunnerPrecomputed {...config} />

export default Oklg
