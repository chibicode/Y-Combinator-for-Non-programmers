import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/xapy.json'

// @ts-ignore
const Xapy = () => <ExpressionRunnerPrecomputed {...config} />

export default Xapy
