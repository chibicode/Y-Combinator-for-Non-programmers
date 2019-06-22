import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/imyd.json'

// @ts-ignore
const Imyd = () => <ExpressionRunnerPrecomputed {...config} />

export default Imyd
