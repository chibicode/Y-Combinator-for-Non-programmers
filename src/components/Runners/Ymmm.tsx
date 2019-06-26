import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ymmm.json'

// @ts-ignore
const Ymmm = () => <ExpressionRunnerPrecomputed {...config} />

export default Ymmm
