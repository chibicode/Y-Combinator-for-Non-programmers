import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/rjfy.json'

// @ts-ignore
const Rjfy = () => <ExpressionRunnerPrecomputed {...config} />

export default Rjfy
