import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/zifr.json'

// @ts-ignore
const Zifr = () => <ExpressionRunnerPrecomputed {...config} />

export default Zifr
