import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/dwnj.json'

// @ts-ignore
const Dwnj = () => <ExpressionRunnerPrecomputed {...config} />

export default Dwnj
