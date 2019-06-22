import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ojma.json'

// @ts-ignore
const Ojma = () => <ExpressionRunnerPrecomputed {...config} />

export default Ojma
