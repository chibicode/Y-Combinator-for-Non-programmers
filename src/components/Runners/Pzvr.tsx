import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/pzvr.json'

// @ts-ignore
const Pzvr = () => <ExpressionRunnerPrecomputed {...config} />

export default Pzvr
