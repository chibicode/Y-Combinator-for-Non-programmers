import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/jmyv.json'

// @ts-ignore
const Jmyv = () => <ExpressionRunnerPrecomputed {...config} />

export default Jmyv
