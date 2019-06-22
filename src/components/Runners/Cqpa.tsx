import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/cqpa.json'

// @ts-ignore
const Cqpa = () => <ExpressionRunnerPrecomputed {...config} />

export default Cqpa
