import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/yykk.json'

// @ts-ignore
const Yykk = () => <ExpressionRunnerPrecomputed {...config} />

export default Yykk
