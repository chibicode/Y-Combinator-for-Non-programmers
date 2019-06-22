import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/dxum.json'

// @ts-ignore
const Dxum = () => <ExpressionRunnerPrecomputed {...config} />

export default Dxum
