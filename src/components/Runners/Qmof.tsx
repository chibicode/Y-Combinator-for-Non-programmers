import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/qmof.json'

// @ts-ignore
const Qmof = () => <ExpressionRunnerPrecomputed {...config} />

export default Qmof
