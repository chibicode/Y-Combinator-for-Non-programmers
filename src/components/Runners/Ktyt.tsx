import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ktyt.json'

// @ts-ignore
const Ktyt = () => <ExpressionRunnerPrecomputed {...config} />

export default Ktyt
