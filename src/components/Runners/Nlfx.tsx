import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/nlfx.json'

// @ts-ignore
const Nlfx = () => <ExpressionRunnerPrecomputed {...config} />

export default Nlfx
