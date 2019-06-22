import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/aaov.json'

// @ts-ignore
const Aaov = () => <ExpressionRunnerPrecomputed {...config} />

export default Aaov
