import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/rreb.json'

// @ts-ignore
const Rreb = () => <ExpressionRunnerPrecomputed {...config} />

export default Rreb
