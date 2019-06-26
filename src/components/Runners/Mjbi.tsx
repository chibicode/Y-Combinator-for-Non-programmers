import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/mjbi.json'

// @ts-ignore
const Mjbi = () => <ExpressionRunnerPrecomputed {...config} />

export default Mjbi
