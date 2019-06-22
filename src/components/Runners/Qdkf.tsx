import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/qdkf.json'

// @ts-ignore
const Qdkf = () => <ExpressionRunnerPrecomputed {...config} />

export default Qdkf
