import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/pbgd.json'

// @ts-ignore
const Pbgd = () => <ExpressionRunnerPrecomputed {...config} />

export default Pbgd
