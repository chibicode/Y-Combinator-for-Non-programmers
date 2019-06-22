import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/zaoc.json'

// @ts-ignore
const Zaoc = () => <ExpressionRunnerPrecomputed {...config} />

export default Zaoc
