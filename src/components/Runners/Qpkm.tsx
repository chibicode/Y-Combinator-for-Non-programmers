import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/qpkm.json'

// @ts-ignore
const Qpkm = () => <ExpressionRunnerPrecomputed {...config} />

export default Qpkm
