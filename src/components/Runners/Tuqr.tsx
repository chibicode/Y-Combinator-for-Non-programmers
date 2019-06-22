import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/tuqr.json'

// @ts-ignore
const Tuqr = () => <ExpressionRunnerPrecomputed {...config} />

export default Tuqr
