import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/yvia.json'

// @ts-ignore
const Yvia = () => <ExpressionRunnerPrecomputed {...config} />

export default Yvia
