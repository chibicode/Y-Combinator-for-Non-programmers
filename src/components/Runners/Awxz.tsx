import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/awxz.json'

// @ts-ignore
const Awxz = () => <ExpressionRunnerPrecomputed {...config} />

export default Awxz
