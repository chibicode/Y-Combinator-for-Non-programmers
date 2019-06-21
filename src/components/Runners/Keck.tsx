import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/keck'

const Keck = () => <ExpressionRunnerPrecomputed {...config} />

export default Keck
