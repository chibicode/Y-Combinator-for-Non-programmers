import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/qscy.json'

// @ts-ignore
const Qscy = () => <ExpressionRunnerPrecomputed {...config} />

export default Qscy
