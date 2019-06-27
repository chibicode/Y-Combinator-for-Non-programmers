import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/toht.json'

// @ts-ignore
const Toht = () => <ExpressionRunnerPrecomputed {...config} />

export default Toht
