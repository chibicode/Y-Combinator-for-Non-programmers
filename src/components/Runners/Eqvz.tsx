import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/eqvz.json'

// @ts-ignore
const Eqvz = () => <ExpressionRunnerPrecomputed {...config} />

export default Eqvz
