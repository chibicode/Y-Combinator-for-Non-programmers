import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ytcf.json'

// @ts-ignore
const Ytcf = () => <ExpressionRunnerPrecomputed {...config} />

export default Ytcf
