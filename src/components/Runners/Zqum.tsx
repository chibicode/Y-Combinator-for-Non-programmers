import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/zqum.json'

// @ts-ignore
const Zqum = () => <ExpressionRunnerPrecomputed {...config} />

export default Zqum
