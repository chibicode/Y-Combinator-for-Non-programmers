import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/skzv.json'

// @ts-ignore
const Skzv = () => <ExpressionRunnerPrecomputed {...config} />

export default Skzv
