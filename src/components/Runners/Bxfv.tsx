import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/bxfv.json'

// @ts-ignore
const Bxfv = () => <ExpressionRunnerPrecomputed {...config} />

export default Bxfv
