import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/gruv.json'

// @ts-ignore
const Gruv = () => <ExpressionRunnerPrecomputed {...config} />

export default Gruv
