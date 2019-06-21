import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/diis'

const Diis = () => <ExpressionRunnerPrecomputed {...config} />

export default Diis
