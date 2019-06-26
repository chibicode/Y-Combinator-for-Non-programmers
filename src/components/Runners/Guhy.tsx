import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/guhy.json'

// @ts-ignore
const Guhy = () => <ExpressionRunnerPrecomputed {...config} />

export default Guhy
