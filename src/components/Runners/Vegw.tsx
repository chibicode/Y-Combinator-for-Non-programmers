import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/vegw.json'

// @ts-ignore
const Vegw = () => <ExpressionRunnerPrecomputed {...config} />

export default Vegw
