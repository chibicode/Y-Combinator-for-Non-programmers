import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/cpbj.json'

// @ts-ignore
const Cpbj = () => <ExpressionRunnerPrecomputed {...config} />

export default Cpbj
