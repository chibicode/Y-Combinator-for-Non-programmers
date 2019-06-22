import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/dtzu.json'

// @ts-ignore
const Dtzu = () => <ExpressionRunnerPrecomputed {...config} />

export default Dtzu
