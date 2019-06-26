import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/atkh.json'

// @ts-ignore
const Atkh = () => <ExpressionRunnerPrecomputed {...config} />

export default Atkh
