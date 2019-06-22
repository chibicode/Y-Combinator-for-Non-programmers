import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/kjyi.json'

// @ts-ignore
const Kjyi = () => <ExpressionRunnerPrecomputed {...config} />

export default Kjyi
