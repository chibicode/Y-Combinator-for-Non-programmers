import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/exww.json'

// @ts-ignore
const Exww = () => <ExpressionRunnerPrecomputed {...config} />

export default Exww
