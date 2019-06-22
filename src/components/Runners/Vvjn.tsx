import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/vvjn.json'

// @ts-ignore
const Vvjn = () => <ExpressionRunnerPrecomputed {...config} />

export default Vvjn
