import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/jfsd.json'

// @ts-ignore
const Jfsd = () => <ExpressionRunnerPrecomputed {...config} />

export default Jfsd
