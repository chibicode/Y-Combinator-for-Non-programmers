import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/egmr.json'

// @ts-ignore
const Egmr = () => <ExpressionRunnerPrecomputed {...config} />

export default Egmr
