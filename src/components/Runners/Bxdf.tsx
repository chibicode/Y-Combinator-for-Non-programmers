import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/bxdf'

const Bxdf = () => <ExpressionRunnerPrecomputed {...config} />

export default Bxdf
