import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/fjyk.json'

// @ts-ignore
const Fjyk = () => <ExpressionRunnerPrecomputed {...config} />

export default Fjyk
