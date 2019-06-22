import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/plxd.json'

// @ts-ignore
const Plxd = () => <ExpressionRunnerPrecomputed {...config} />

export default Plxd
