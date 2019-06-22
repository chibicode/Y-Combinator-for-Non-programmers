import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ysji.json'

// @ts-ignore
const Ysji = () => <ExpressionRunnerPrecomputed {...config} />

export default Ysji
