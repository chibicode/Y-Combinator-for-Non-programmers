import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/gcnt.json'

// @ts-ignore
const Gcnt = () => <ExpressionRunnerPrecomputed {...config} />

export default Gcnt
