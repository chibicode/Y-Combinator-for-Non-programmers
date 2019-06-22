import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/qwke.json'

// @ts-ignore
const Qwke = () => <ExpressionRunnerPrecomputed {...config} />

export default Qwke
