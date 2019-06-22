import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/udvh.json'

// @ts-ignore
const Udvh = () => <ExpressionRunnerPrecomputed {...config} />

export default Udvh
