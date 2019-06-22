import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/xemt.json'

// @ts-ignore
const Xemt = () => <ExpressionRunnerPrecomputed {...config} />

export default Xemt
