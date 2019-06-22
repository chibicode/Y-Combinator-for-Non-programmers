import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ielw.json'

// @ts-ignore
const Ielw = () => <ExpressionRunnerPrecomputed {...config} />

export default Ielw
