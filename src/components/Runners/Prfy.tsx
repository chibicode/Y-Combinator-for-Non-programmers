import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/prfy.json'

// @ts-ignore
const Prfy = () => <ExpressionRunnerPrecomputed {...config} />

export default Prfy
