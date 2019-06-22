import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/lxnu.json'

// @ts-ignore
const Lxnu = () => <ExpressionRunnerPrecomputed {...config} />

export default Lxnu
