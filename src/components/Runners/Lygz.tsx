import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/lygz.json'

// @ts-ignore
const Lygz = () => <ExpressionRunnerPrecomputed {...config} />

export default Lygz
