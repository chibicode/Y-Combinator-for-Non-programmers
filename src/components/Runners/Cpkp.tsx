import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/cpkp.json'

// @ts-ignore
const Cpkp = () => <ExpressionRunnerPrecomputed {...config} />

export default Cpkp
