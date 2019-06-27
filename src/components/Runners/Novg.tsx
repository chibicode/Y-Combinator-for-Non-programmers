import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/novg.json'

// @ts-ignore
const Novg = () => <ExpressionRunnerPrecomputed {...config} />

export default Novg
