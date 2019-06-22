import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/bpsz.json'

// @ts-ignore
const Bpsz = () => <ExpressionRunnerPrecomputed {...config} />

export default Bpsz
