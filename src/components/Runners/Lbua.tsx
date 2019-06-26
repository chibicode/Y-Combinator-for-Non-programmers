import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/lbua.json'

// @ts-ignore
const Lbua = () => <ExpressionRunnerPrecomputed {...config} />

export default Lbua
