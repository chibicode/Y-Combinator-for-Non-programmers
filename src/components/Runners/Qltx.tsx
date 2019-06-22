import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/qltx.json'

// @ts-ignore
const Qltx = () => <ExpressionRunnerPrecomputed {...config} />

export default Qltx
