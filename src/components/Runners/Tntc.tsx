import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/tntc.json'

// @ts-ignore
const Tntc = () => <ExpressionRunnerPrecomputed {...config} />

export default Tntc
