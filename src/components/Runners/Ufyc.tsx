import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ufyc.json'

// @ts-ignore
const Ufyc = () => <ExpressionRunnerPrecomputed {...config} />

export default Ufyc
