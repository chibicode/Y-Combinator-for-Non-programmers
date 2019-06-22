import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/nicg.json'

// @ts-ignore
const Nicg = () => <ExpressionRunnerPrecomputed {...config} />

export default Nicg
