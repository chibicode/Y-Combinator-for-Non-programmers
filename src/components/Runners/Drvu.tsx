import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/drvu.json'

// @ts-ignore
const Drvu = () => <ExpressionRunnerPrecomputed {...config} />

export default Drvu
