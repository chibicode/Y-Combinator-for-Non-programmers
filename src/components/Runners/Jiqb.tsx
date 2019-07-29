import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/jiqb.json'

// @ts-ignore
const Jiqb = () => <ExpressionRunnerPrecomputed {...config} />

export default Jiqb
