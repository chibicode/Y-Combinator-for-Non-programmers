import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/dqey.json'

// @ts-ignore
const Dqey = () => <ExpressionRunnerPrecomputed {...config} />

export default Dqey
