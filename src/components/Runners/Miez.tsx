import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/miez.json'

// @ts-ignore
const Miez = () => <ExpressionRunnerPrecomputed {...config} />

export default Miez
