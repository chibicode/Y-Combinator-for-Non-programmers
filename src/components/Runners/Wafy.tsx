import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/wafy.json'

// @ts-ignore
const Wafy = () => <ExpressionRunnerPrecomputed {...config} />

export default Wafy
