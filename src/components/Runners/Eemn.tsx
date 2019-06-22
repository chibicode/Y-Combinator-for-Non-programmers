import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/eemn.json'

// @ts-ignore
const Eemn = () => <ExpressionRunnerPrecomputed {...config} />

export default Eemn
