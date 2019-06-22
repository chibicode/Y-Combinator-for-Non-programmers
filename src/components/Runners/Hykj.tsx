import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/hykj.json'

// @ts-ignore
const Hykj = () => <ExpressionRunnerPrecomputed {...config} />

export default Hykj
