import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ouis.json'

// @ts-ignore
const Ouis = () => <ExpressionRunnerPrecomputed {...config} />

export default Ouis
