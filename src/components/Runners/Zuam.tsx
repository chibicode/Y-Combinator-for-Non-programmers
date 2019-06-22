import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/zuam.json'

// @ts-ignore
const Zuam = () => <ExpressionRunnerPrecomputed {...config} />

export default Zuam
