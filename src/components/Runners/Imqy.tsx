import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/imqy.json'

// @ts-ignore
const Imqy = () => <ExpressionRunnerPrecomputed {...config} />

export default Imqy
