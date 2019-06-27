import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/plbv.json'

// @ts-ignore
const Plbv = () => <ExpressionRunnerPrecomputed {...config} />

export default Plbv
