import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/nmoc.json'

// @ts-ignore
const Nmoc = () => <ExpressionRunnerPrecomputed {...config} />

export default Nmoc
