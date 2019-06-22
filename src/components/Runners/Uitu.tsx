import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/uitu.json'

// @ts-ignore
const Uitu = () => <ExpressionRunnerPrecomputed {...config} />

export default Uitu
