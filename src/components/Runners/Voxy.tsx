import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/voxy.json'

// @ts-ignore
const Voxy = () => <ExpressionRunnerPrecomputed {...config} />

export default Voxy
