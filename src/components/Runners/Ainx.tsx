import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ainx.json'

// @ts-ignore
const Ainx = () => <ExpressionRunnerPrecomputed {...config} />

export default Ainx
