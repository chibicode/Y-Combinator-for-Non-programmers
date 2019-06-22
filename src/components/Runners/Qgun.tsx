import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/qgun.json'

// @ts-ignore
const Qgun = () => <ExpressionRunnerPrecomputed {...config} />

export default Qgun
