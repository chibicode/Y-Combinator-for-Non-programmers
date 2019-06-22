import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/aezk.json'

// @ts-ignore
const Aezk = () => <ExpressionRunnerPrecomputed {...config} />

export default Aezk
