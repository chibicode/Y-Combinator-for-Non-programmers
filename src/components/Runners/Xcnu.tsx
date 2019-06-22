import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/xcnu.json'

// @ts-ignore
const Xcnu = () => <ExpressionRunnerPrecomputed {...config} />

export default Xcnu
