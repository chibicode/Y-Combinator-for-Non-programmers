import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/sojz.json'

// @ts-ignore
const Sojz = () => <ExpressionRunnerPrecomputed {...config} />

export default Sojz
