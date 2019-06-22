import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/hzlj.json'

// @ts-ignore
const Hzlj = () => <ExpressionRunnerPrecomputed {...config} />

export default Hzlj
