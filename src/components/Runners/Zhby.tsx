import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/zhby.json'

// @ts-ignore
const Zhby = () => <ExpressionRunnerPrecomputed {...config} />

export default Zhby
