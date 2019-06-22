import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/bpza.json'

// @ts-ignore
const Bpza = () => <ExpressionRunnerPrecomputed {...config} />

export default Bpza
