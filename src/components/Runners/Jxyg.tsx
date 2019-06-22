import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/jxyg.json'

// @ts-ignore
const Jxyg = () => <ExpressionRunnerPrecomputed {...config} />

export default Jxyg
