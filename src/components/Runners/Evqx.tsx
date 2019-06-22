import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/evqx.json'

// @ts-ignore
const Evqx = () => <ExpressionRunnerPrecomputed {...config} />

export default Evqx
