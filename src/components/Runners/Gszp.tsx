import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/gszp.json'

// @ts-ignore
const Gszp = () => <ExpressionRunnerPrecomputed {...config} />

export default Gszp
