import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/xpvh.json'

// @ts-ignore
const Xpvh = () => <ExpressionRunnerPrecomputed {...config} />

export default Xpvh
