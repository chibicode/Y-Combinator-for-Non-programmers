import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/wtax.json'

// @ts-ignore
const Wtax = () => <ExpressionRunnerPrecomputed {...config} />

export default Wtax
