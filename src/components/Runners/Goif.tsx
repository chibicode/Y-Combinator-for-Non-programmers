import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/goif.json'

// @ts-ignore
const Goif = () => <ExpressionRunnerPrecomputed {...config} />

export default Goif
