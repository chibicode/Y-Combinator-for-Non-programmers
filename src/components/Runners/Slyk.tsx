import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/slyk'

const Slyk = () => <ExpressionRunnerPrecomputed {...config} />

export default Slyk