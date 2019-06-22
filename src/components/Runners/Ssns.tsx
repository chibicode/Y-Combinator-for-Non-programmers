import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ssns.json'

// @ts-ignore
const Ssns = () => <ExpressionRunnerPrecomputed {...config} />

export default Ssns
