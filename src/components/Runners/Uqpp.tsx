import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/uqpp.json'

// @ts-ignore
const Uqpp = () => <ExpressionRunnerPrecomputed {...config} />

export default Uqpp
