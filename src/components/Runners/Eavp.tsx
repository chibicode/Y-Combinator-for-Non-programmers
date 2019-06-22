import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/eavp.json'

// @ts-ignore
const Eavp = () => <ExpressionRunnerPrecomputed {...config} />

export default Eavp
