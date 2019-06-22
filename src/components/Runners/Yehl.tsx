import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/yehl.json'

// @ts-ignore
const Yehl = () => <ExpressionRunnerPrecomputed {...config} />

export default Yehl
