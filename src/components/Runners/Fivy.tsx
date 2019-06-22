import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/fivy.json'

// @ts-ignore
const Fivy = () => <ExpressionRunnerPrecomputed {...config} />

export default Fivy
