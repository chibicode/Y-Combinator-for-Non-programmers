import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/hdwy.json'

// @ts-ignore
const Hdwy = () => <ExpressionRunnerPrecomputed {...config} />

export default Hdwy
