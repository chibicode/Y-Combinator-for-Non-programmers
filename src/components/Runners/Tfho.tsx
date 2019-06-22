import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/tfho.json'

// @ts-ignore
const Tfho = () => <ExpressionRunnerPrecomputed {...config} />

export default Tfho
