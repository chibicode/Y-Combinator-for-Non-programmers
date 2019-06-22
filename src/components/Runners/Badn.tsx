import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/badn.json'

// @ts-ignore
const Badn = () => <ExpressionRunnerPrecomputed {...config} />

export default Badn
