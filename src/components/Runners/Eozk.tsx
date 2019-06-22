import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/eozk.json'

// @ts-ignore
const Eozk = () => <ExpressionRunnerPrecomputed {...config} />

export default Eozk
