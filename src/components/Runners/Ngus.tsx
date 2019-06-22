import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ngus.json'

// @ts-ignore
const Ngus = () => <ExpressionRunnerPrecomputed {...config} />

export default Ngus
