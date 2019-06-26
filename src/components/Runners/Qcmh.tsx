import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/qcmh.json'

// @ts-ignore
const Qcmh = () => <ExpressionRunnerPrecomputed {...config} />

export default Qcmh
