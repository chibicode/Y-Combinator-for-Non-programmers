import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/dcfi.json'

// @ts-ignore
const Dcfi = () => <ExpressionRunnerPrecomputed {...config} />

export default Dcfi
