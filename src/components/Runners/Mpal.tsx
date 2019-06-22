import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/mpal.json'

// @ts-ignore
const Mpal = () => <ExpressionRunnerPrecomputed {...config} />

export default Mpal
