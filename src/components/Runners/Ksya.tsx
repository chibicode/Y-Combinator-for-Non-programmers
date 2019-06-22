import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ksya.json'

// @ts-ignore
const Ksya = () => <ExpressionRunnerPrecomputed {...config} />

export default Ksya
