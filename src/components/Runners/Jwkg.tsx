import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/jwkg.json'

// @ts-ignore
const Jwkg = () => <ExpressionRunnerPrecomputed {...config} />

export default Jwkg
