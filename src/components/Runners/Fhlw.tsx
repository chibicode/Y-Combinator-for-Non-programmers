import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/fhlw.json'

// @ts-ignore
const Fhlw = () => <ExpressionRunnerPrecomputed {...config} />

export default Fhlw
