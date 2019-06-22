import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/bmms.json'

// @ts-ignore
const Bmms = () => <ExpressionRunnerPrecomputed {...config} />

export default Bmms
