import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/iifq.json'

// @ts-ignore
const Iifq = () => <ExpressionRunnerPrecomputed {...config} />

export default Iifq
