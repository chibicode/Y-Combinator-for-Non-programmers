import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/yhmp.json'

// @ts-ignore
const Yhmp = () => <ExpressionRunnerPrecomputed {...config} />

export default Yhmp
