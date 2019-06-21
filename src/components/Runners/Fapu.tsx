import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/fapu'

const Fapu = () => <ExpressionRunnerPrecomputed {...config} />

export default Fapu
