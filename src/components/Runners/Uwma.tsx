import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/uwma.json'

// @ts-ignore
const Uwma = () => <ExpressionRunnerPrecomputed {...config} />

export default Uwma
