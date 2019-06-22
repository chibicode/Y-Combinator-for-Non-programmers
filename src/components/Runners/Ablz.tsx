import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ablz.json'

// @ts-ignore
const Ablz = () => <ExpressionRunnerPrecomputed {...config} />

export default Ablz
