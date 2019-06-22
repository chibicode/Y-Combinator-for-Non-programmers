import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/itzl.json'

// @ts-ignore
const Itzl = () => <ExpressionRunnerPrecomputed {...config} />

export default Itzl
