import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/nxsa.json'

// @ts-ignore
const Nxsa = () => <ExpressionRunnerPrecomputed {...config} />

export default Nxsa
