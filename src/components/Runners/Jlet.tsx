import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/jlet.json'

// @ts-ignore
const Jlet = () => <ExpressionRunnerPrecomputed {...config} />

export default Jlet
