import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/vpmj.json'

// @ts-ignore
const Vpmj = () => <ExpressionRunnerPrecomputed {...config} />

export default Vpmj
