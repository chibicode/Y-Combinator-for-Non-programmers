import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/pzwe.json'

// @ts-ignore
const Pzwe = () => <ExpressionRunnerPrecomputed {...config} />

export default Pzwe
