import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/nric.json'

// @ts-ignore
const Nric = () => <ExpressionRunnerPrecomputed {...config} />

export default Nric
