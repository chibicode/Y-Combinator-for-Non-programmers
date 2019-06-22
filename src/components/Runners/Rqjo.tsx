import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/rqjo.json'

// @ts-ignore
const Rqjo = () => <ExpressionRunnerPrecomputed {...config} />

export default Rqjo
