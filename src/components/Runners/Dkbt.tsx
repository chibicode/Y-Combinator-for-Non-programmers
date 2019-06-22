import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/dkbt.json'

// @ts-ignore
const Dkbt = () => <ExpressionRunnerPrecomputed {...config} />

export default Dkbt
