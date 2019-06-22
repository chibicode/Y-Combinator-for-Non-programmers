import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/hvdn.json'

// @ts-ignore
const Hvdn = () => <ExpressionRunnerPrecomputed {...config} />

export default Hvdn
