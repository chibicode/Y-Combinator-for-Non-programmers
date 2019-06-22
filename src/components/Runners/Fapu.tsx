import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/fapu.json'

// @ts-ignore
const Fapu = () => <ExpressionRunnerPrecomputed {...config} />

export default Fapu
