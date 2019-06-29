import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/fwks.json'

// @ts-ignore
const Fwks = () => <ExpressionRunnerPrecomputed {...config} />

export default Fwks
