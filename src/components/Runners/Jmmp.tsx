import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/jmmp.json'

// @ts-ignore
const Jmmp = () => <ExpressionRunnerPrecomputed {...config} />

export default Jmmp
