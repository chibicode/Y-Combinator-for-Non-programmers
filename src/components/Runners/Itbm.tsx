import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/itbm.json'

// @ts-ignore
const Itbm = () => <ExpressionRunnerPrecomputed {...config} />

export default Itbm
