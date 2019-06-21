import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/stio'

const Stio = () => <ExpressionRunnerPrecomputed {...config} />

export default Stio
