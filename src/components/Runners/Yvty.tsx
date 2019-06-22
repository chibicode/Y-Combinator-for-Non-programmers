import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/yvty.json'

// @ts-ignore
const Yvty = () => <ExpressionRunnerPrecomputed {...config} />

export default Yvty
