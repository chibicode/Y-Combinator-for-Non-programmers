import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/kupy'

const Kupy = () => <ExpressionRunnerPrecomputed {...config} />

export default Kupy
