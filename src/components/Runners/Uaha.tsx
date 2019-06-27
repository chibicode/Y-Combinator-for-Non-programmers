import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/uaha.json'

// @ts-ignore
const Uaha = () => <ExpressionRunnerPrecomputed {...config} />

export default Uaha
