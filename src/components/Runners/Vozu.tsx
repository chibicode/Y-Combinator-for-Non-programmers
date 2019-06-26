import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/vozu.json'

// @ts-ignore
const Vozu = () => <ExpressionRunnerPrecomputed {...config} />

export default Vozu
