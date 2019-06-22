import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/emmb.json'

// @ts-ignore
const Emmb = () => <ExpressionRunnerPrecomputed {...config} />

export default Emmb
