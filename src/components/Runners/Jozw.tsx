import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/jozw.json'

// @ts-ignore
const Jozw = () => <ExpressionRunnerPrecomputed {...config} />

export default Jozw
