import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/plts.json'

// @ts-ignore
const Plts = () => <ExpressionRunnerPrecomputed {...config} />

export default Plts
