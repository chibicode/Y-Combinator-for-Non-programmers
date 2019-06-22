import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/gwtp.json'

// @ts-ignore
const Gwtp = () => <ExpressionRunnerPrecomputed {...config} />

export default Gwtp
