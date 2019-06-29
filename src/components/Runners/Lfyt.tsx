import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/lfyt.json'

// @ts-ignore
const Lfyt = () => <ExpressionRunnerPrecomputed {...config} />

export default Lfyt
