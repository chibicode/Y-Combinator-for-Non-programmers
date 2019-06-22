import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/xwim.json'

// @ts-ignore
const Xwim = () => <ExpressionRunnerPrecomputed {...config} />

export default Xwim
