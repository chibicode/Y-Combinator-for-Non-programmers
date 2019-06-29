import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/lvau.json'

// @ts-ignore
const Lvau = () => <ExpressionRunnerPrecomputed {...config} />

export default Lvau
