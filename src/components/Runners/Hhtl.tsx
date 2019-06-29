import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/hhtl.json'

// @ts-ignore
const Hhtl = () => <ExpressionRunnerPrecomputed {...config} />

export default Hhtl
