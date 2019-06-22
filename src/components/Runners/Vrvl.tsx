import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/vrvl.json'

// @ts-ignore
const Vrvl = () => <ExpressionRunnerPrecomputed {...config} />

export default Vrvl
