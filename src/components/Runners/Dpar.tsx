import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/dpar.json'

// @ts-ignore
const Dpar = () => <ExpressionRunnerPrecomputed {...config} />

export default Dpar
