import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/luir.json'

// @ts-ignore
const Luir = () => <ExpressionRunnerPrecomputed {...config} />

export default Luir
