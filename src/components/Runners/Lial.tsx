import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/lial.json'

// @ts-ignore
const Lial = () => <ExpressionRunnerPrecomputed {...config} />

export default Lial
