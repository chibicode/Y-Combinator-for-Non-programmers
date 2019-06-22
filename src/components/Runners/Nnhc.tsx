import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/nnhc.json'

// @ts-ignore
const Nnhc = () => <ExpressionRunnerPrecomputed {...config} />

export default Nnhc
