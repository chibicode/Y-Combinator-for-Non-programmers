import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/wunw.json'

// @ts-ignore
const Wunw = () => <ExpressionRunnerPrecomputed {...config} />

export default Wunw
