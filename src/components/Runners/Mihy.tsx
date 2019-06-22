import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/mihy.json'

// @ts-ignore
const Mihy = () => <ExpressionRunnerPrecomputed {...config} />

export default Mihy
