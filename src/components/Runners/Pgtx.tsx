import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/pgtx.json'

// @ts-ignore
const Pgtx = () => <ExpressionRunnerPrecomputed {...config} />

export default Pgtx
