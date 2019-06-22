import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/omlc.json'

// @ts-ignore
const Omlc = () => <ExpressionRunnerPrecomputed {...config} />

export default Omlc
