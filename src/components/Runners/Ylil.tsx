import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ylil.json'

// @ts-ignore
const Ylil = () => <ExpressionRunnerPrecomputed {...config} />

export default Ylil
