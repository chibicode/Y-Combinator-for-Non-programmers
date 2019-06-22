import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/kqip.json'

// @ts-ignore
const Kqip = () => <ExpressionRunnerPrecomputed {...config} />

export default Kqip
