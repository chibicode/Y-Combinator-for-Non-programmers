import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/gtnr.json'

// @ts-ignore
const Gtnr = () => <ExpressionRunnerPrecomputed {...config} />

export default Gtnr
