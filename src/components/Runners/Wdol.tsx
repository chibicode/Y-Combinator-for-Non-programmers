import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/wdol.json'

// @ts-ignore
const Wdol = () => <ExpressionRunnerPrecomputed {...config} />

export default Wdol
