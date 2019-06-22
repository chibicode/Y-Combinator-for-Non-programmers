import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/dvrw.json'

// @ts-ignore
const Dvrw = () => <ExpressionRunnerPrecomputed {...config} />

export default Dvrw
