import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ttvy.json'

// @ts-ignore
const Ttvy = () => <ExpressionRunnerPrecomputed {...config} />

export default Ttvy
