import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/dret.json'

// @ts-ignore
const Dret = () => <ExpressionRunnerPrecomputed {...config} />

export default Dret
