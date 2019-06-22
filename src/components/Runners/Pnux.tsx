import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/pnux.json'

// @ts-ignore
const Pnux = () => <ExpressionRunnerPrecomputed {...config} />

export default Pnux
