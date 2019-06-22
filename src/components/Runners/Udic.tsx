import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/udic.json'

// @ts-ignore
const Udic = () => <ExpressionRunnerPrecomputed {...config} />

export default Udic
