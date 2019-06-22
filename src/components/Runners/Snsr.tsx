import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/snsr.json'

// @ts-ignore
const Snsr = () => <ExpressionRunnerPrecomputed {...config} />

export default Snsr
