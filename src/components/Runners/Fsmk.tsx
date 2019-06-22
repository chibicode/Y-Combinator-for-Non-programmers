import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/fsmk.json'

// @ts-ignore
const Fsmk = () => <ExpressionRunnerPrecomputed {...config} />

export default Fsmk
