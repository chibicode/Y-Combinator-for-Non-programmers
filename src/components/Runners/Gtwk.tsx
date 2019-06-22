import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/gtwk.json'

// @ts-ignore
const Gtwk = () => <ExpressionRunnerPrecomputed {...config} />

export default Gtwk
