import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/tdau.json'

// @ts-ignore
const Tdau = () => <ExpressionRunnerPrecomputed {...config} />

export default Tdau
