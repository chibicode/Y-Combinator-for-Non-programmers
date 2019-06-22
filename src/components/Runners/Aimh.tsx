import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/aimh.json'

// @ts-ignore
const Aimh = () => <ExpressionRunnerPrecomputed {...config} />

export default Aimh
