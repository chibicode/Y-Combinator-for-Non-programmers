import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/qpjt.json'

// @ts-ignore
const Qpjt = () => <ExpressionRunnerPrecomputed {...config} />

export default Qpjt
