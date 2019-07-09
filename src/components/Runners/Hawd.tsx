import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/hawd.json'

// @ts-ignore
const Hawd = () => <ExpressionRunnerPrecomputed {...config} />

export default Hawd
