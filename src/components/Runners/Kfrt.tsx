import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/kfrt.json'

// @ts-ignore
const Kfrt = () => <ExpressionRunnerPrecomputed {...config} />

export default Kfrt
