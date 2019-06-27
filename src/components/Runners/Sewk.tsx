import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/sewk.json'

// @ts-ignore
const Sewk = () => <ExpressionRunnerPrecomputed {...config} />

export default Sewk
