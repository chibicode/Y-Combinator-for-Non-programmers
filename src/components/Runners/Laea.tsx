import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/laea.json'

// @ts-ignore
const Laea = () => <ExpressionRunnerPrecomputed {...config} />

export default Laea
