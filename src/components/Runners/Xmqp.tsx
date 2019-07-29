import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/xmqp.json'

// @ts-ignore
const Xmqp = () => <ExpressionRunnerPrecomputed {...config} />

export default Xmqp
