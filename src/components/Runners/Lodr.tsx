import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/lodr.json'

// @ts-ignore
const Lodr = () => <ExpressionRunnerPrecomputed {...config} />

export default Lodr
