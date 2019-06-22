import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/mhwq.json'

// @ts-ignore
const Mhwq = () => <ExpressionRunnerPrecomputed {...config} />

export default Mhwq
