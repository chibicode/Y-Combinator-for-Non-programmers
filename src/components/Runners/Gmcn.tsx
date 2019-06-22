import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/gmcn.json'

// @ts-ignore
const Gmcn = () => <ExpressionRunnerPrecomputed {...config} />

export default Gmcn
