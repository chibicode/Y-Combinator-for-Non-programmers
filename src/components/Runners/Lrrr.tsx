import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/lrrr.json'

// @ts-ignore
const Lrrr = () => <ExpressionRunnerPrecomputed {...config} />

export default Lrrr
