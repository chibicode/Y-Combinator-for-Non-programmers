import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/jruw.json'

// @ts-ignore
const Jruw = () => <ExpressionRunnerPrecomputed {...config} />

export default Jruw
