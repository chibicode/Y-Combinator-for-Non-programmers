import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/cnoq.json'

// @ts-ignore
const Cnoq = () => <ExpressionRunnerPrecomputed {...config} />

export default Cnoq
