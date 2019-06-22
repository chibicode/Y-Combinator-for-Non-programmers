import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/tkqr.json'

// @ts-ignore
const Tkqr = () => <ExpressionRunnerPrecomputed {...config} />

export default Tkqr
