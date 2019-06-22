import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/qxgl.json'

// @ts-ignore
const Qxgl = () => <ExpressionRunnerPrecomputed {...config} />

export default Qxgl
