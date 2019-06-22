import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/mrky.json'

// @ts-ignore
const Mrky = () => <ExpressionRunnerPrecomputed {...config} />

export default Mrky
