import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/blre.json'

// @ts-ignore
const Blre = () => <ExpressionRunnerPrecomputed {...config} />

export default Blre
