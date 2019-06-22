import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/sgfj.json'

// @ts-ignore
const Sgfj = () => <ExpressionRunnerPrecomputed {...config} />

export default Sgfj
