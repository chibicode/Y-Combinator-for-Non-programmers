import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/wbpx.json'

// @ts-ignore
const Wbpx = () => <ExpressionRunnerPrecomputed {...config} />

export default Wbpx
