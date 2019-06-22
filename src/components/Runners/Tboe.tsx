import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/tboe.json'

// @ts-ignore
const Tboe = () => <ExpressionRunnerPrecomputed {...config} />

export default Tboe
