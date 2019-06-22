import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/knhw.json'

// @ts-ignore
const Knhw = () => <ExpressionRunnerPrecomputed {...config} />

export default Knhw
