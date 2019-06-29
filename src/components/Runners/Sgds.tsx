import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/sgds.json'

// @ts-ignore
const Sgds = () => <ExpressionRunnerPrecomputed {...config} />

export default Sgds
