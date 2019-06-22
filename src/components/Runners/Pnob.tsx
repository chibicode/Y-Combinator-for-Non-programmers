import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/pnob.json'

// @ts-ignore
const Pnob = () => <ExpressionRunnerPrecomputed {...config} />

export default Pnob
