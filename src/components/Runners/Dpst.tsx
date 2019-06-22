import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/dpst.json'

// @ts-ignore
const Dpst = () => <ExpressionRunnerPrecomputed {...config} />

export default Dpst
