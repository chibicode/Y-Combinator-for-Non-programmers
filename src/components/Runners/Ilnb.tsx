import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ilnb.json'

// @ts-ignore
const Ilnb = () => <ExpressionRunnerPrecomputed {...config} />

export default Ilnb
