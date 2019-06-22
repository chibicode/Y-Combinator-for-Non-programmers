import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/brrh.json'

// @ts-ignore
const Brrh = () => <ExpressionRunnerPrecomputed {...config} />

export default Brrh
