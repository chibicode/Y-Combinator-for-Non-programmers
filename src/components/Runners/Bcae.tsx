import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/bcae.json'

// @ts-ignore
const Bcae = () => <ExpressionRunnerPrecomputed {...config} />

export default Bcae
