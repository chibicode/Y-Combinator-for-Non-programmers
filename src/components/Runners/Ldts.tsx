import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ldts.json'

// @ts-ignore
const Ldts = () => <ExpressionRunnerPrecomputed {...config} />

export default Ldts
