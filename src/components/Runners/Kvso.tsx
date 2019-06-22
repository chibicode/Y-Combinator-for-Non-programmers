import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/kvso.json'

// @ts-ignore
const Kvso = () => <ExpressionRunnerPrecomputed {...config} />

export default Kvso
