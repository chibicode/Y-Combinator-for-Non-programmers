import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/gopk.json'

// @ts-ignore
const Gopk = () => <ExpressionRunnerPrecomputed {...config} />

export default Gopk
