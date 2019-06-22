import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/cgpd.json'

// @ts-ignore
const Cgpd = () => <ExpressionRunnerPrecomputed {...config} />

export default Cgpd
