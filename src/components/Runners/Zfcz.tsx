import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/zfcz.json'

// @ts-ignore
const Zfcz = () => <ExpressionRunnerPrecomputed {...config} />

export default Zfcz
