import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/igrt.json'

// @ts-ignore
const Igrt = () => <ExpressionRunnerPrecomputed {...config} />

export default Igrt
