import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/diis.json'

// @ts-ignore
const Diis = () => <ExpressionRunnerPrecomputed {...config} />

export default Diis
