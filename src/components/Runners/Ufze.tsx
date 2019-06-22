import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ufze.json'

// @ts-ignore
const Ufze = () => <ExpressionRunnerPrecomputed {...config} />

export default Ufze
