import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/fiab.json'

// @ts-ignore
const Fiab = () => <ExpressionRunnerPrecomputed {...config} />

export default Fiab
