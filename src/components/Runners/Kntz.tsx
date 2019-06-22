import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/kntz.json'

// @ts-ignore
const Kntz = () => <ExpressionRunnerPrecomputed {...config} />

export default Kntz
