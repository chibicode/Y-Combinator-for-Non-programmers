import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/woft.json'

// @ts-ignore
const Woft = () => <ExpressionRunnerPrecomputed {...config} />

export default Woft
