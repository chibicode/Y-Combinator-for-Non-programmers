import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/xsve.json'

// @ts-ignore
const Xsve = () => <ExpressionRunnerPrecomputed {...config} />

export default Xsve
