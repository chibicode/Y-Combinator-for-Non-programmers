import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/xhbi.json'

// @ts-ignore
const Xhbi = () => <ExpressionRunnerPrecomputed {...config} />

export default Xhbi
