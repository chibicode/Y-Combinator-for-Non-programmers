import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/iygh.json'

// @ts-ignore
const Iygh = () => <ExpressionRunnerPrecomputed {...config} />

export default Iygh
