import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/zwpj.json'

// @ts-ignore
const Zwpj = () => <ExpressionRunnerPrecomputed {...config} />

export default Zwpj
