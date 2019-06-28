import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/drbt.json'

// @ts-ignore
const Drbt = () => <ExpressionRunnerPrecomputed {...config} />

export default Drbt
