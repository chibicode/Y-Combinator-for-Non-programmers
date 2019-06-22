import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/bcgc.json'

// @ts-ignore
const Bcgc = () => <ExpressionRunnerPrecomputed {...config} />

export default Bcgc
