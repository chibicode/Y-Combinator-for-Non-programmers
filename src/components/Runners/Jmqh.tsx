import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/jmqh.json'

// @ts-ignore
const Jmqh = () => <ExpressionRunnerPrecomputed {...config} />

export default Jmqh
