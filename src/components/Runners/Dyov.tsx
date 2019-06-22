import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/dyov.json'

// @ts-ignore
const Dyov = () => <ExpressionRunnerPrecomputed {...config} />

export default Dyov
