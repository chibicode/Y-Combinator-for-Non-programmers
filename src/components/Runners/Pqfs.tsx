import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/pqfs.json'

// @ts-ignore
const Pqfs = () => <ExpressionRunnerPrecomputed {...config} />

export default Pqfs
