import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/fatm.json'

// @ts-ignore
const Fatm = () => <ExpressionRunnerPrecomputed {...config} />

export default Fatm
