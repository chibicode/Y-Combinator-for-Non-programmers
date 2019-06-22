import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ldox.json'

// @ts-ignore
const Ldox = () => <ExpressionRunnerPrecomputed {...config} />

export default Ldox
