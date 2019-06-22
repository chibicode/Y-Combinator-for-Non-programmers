import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/szou.json'

// @ts-ignore
const Szou = () => <ExpressionRunnerPrecomputed {...config} />

export default Szou
