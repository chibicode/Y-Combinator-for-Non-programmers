import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ccon.json'

// @ts-ignore
const Ccon = () => <ExpressionRunnerPrecomputed {...config} />

export default Ccon
