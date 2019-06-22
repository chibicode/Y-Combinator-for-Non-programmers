import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/xefx.json'

// @ts-ignore
const Xefx = () => <ExpressionRunnerPrecomputed {...config} />

export default Xefx
