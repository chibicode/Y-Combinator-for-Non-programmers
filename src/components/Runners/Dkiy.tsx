import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/dkiy.json'

// @ts-ignore
const Dkiy = () => <ExpressionRunnerPrecomputed {...config} />

export default Dkiy
