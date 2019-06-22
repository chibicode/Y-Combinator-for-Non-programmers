import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/xgei.json'

// @ts-ignore
const Xgei = () => <ExpressionRunnerPrecomputed {...config} />

export default Xgei
