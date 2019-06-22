import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/bpwl.json'

// @ts-ignore
const Bpwl = () => <ExpressionRunnerPrecomputed {...config} />

export default Bpwl
