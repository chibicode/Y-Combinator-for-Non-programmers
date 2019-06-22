import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/jbam.json'

// @ts-ignore
const Jbam = () => <ExpressionRunnerPrecomputed {...config} />

export default Jbam
