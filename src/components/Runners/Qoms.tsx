import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/qoms.json'

// @ts-ignore
const Qoms = () => <ExpressionRunnerPrecomputed {...config} />

export default Qoms
