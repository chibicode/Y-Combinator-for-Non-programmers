import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/efyy.json'

// @ts-ignore
const Efyy = () => <ExpressionRunnerPrecomputed {...config} />

export default Efyy
