import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/xekr.json'

// @ts-ignore
const Xekr = () => <ExpressionRunnerPrecomputed {...config} />

export default Xekr
