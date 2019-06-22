import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/bxdf.json'

// @ts-ignore
const Bxdf = () => <ExpressionRunnerPrecomputed {...config} />

export default Bxdf
