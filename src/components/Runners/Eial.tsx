import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/eial.json'

// @ts-ignore
const Eial = () => <ExpressionRunnerPrecomputed {...config} />

export default Eial
