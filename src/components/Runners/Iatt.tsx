import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/iatt.json'

// @ts-ignore
const Iatt = () => <ExpressionRunnerPrecomputed {...config} />

export default Iatt
