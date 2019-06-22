import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/xsby.json'

// @ts-ignore
const Xsby = () => <ExpressionRunnerPrecomputed {...config} />

export default Xsby
