import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/iwkx.json'

// @ts-ignore
const Iwkx = () => <ExpressionRunnerPrecomputed {...config} />

export default Iwkx
