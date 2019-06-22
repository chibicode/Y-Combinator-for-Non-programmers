import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/bmnc.json'

// @ts-ignore
const Bmnc = () => <ExpressionRunnerPrecomputed {...config} />

export default Bmnc
