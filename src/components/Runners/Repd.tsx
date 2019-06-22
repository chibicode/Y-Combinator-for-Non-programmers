import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/repd.json'

// @ts-ignore
const Repd = () => <ExpressionRunnerPrecomputed {...config} />

export default Repd
