import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ijot.json'

// @ts-ignore
const Ijot = () => <ExpressionRunnerPrecomputed {...config} />

export default Ijot
