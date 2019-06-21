import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/umce'

const Umce = () => <ExpressionRunnerPrecomputed {...config} />

export default Umce
