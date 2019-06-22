import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/umce.json'

// @ts-ignore
const Umce = () => <ExpressionRunnerPrecomputed {...config} />

export default Umce
