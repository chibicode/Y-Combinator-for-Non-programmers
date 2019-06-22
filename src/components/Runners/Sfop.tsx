import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/sfop.json'

// @ts-ignore
const Sfop = () => <ExpressionRunnerPrecomputed {...config} />

export default Sfop
