import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/cvtc.json'

// @ts-ignore
const Cvtc = () => <ExpressionRunnerPrecomputed {...config} />

export default Cvtc
