import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ljjg.json'

// @ts-ignore
const Ljjg = () => <ExpressionRunnerPrecomputed {...config} />

export default Ljjg
