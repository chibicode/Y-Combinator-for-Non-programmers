import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/hwtu.json'

// @ts-ignore
const Hwtu = () => <ExpressionRunnerPrecomputed {...config} />

export default Hwtu
