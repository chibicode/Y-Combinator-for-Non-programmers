import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/guuf.json'

// @ts-ignore
const Guuf = () => <ExpressionRunnerPrecomputed {...config} />

export default Guuf
