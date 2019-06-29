import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/givg.json'

// @ts-ignore
const Givg = () => <ExpressionRunnerPrecomputed {...config} />

export default Givg
