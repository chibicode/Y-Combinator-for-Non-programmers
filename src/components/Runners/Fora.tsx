import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/fora.json'

// @ts-ignore
const Fora = () => <ExpressionRunnerPrecomputed {...config} />

export default Fora
