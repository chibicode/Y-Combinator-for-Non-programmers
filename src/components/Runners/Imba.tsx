import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/imba.json'

// @ts-ignore
const Imba = () => <ExpressionRunnerPrecomputed {...config} />

export default Imba
