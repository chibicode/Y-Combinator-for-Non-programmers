import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/dymt.json'

// @ts-ignore
const Dymt = () => <ExpressionRunnerPrecomputed {...config} />

export default Dymt
