import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/bozr.json'

// @ts-ignore
const Bozr = () => <ExpressionRunnerPrecomputed {...config} />

export default Bozr
