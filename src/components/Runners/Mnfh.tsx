import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/mnfh.json'

// @ts-ignore
const Mnfh = () => <ExpressionRunnerPrecomputed {...config} />

export default Mnfh
