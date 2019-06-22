import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/uqts.json'

// @ts-ignore
const Uqts = () => <ExpressionRunnerPrecomputed {...config} />

export default Uqts
