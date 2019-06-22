import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/jwzh.json'

// @ts-ignore
const Jwzh = () => <ExpressionRunnerPrecomputed {...config} />

export default Jwzh
