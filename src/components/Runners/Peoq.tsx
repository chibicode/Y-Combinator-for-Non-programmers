import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/peoq.json'

// @ts-ignore
const Peoq = () => <ExpressionRunnerPrecomputed {...config} />

export default Peoq
