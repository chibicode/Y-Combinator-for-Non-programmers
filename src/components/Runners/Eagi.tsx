import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/eagi.json'

// @ts-ignore
const Eagi = () => <ExpressionRunnerPrecomputed {...config} />

export default Eagi
