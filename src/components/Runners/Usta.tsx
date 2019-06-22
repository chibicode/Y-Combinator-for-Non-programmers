import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/usta.json'

// @ts-ignore
const Usta = () => <ExpressionRunnerPrecomputed {...config} />

export default Usta
