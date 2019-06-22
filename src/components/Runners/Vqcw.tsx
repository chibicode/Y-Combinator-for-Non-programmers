import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/vqcw.json'

// @ts-ignore
const Vqcw = () => <ExpressionRunnerPrecomputed {...config} />

export default Vqcw
