import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/bdlj.json'

// @ts-ignore
const Bdlj = () => <ExpressionRunnerPrecomputed {...config} />

export default Bdlj
