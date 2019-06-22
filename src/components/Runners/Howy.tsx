import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/howy.json'

// @ts-ignore
const Howy = () => <ExpressionRunnerPrecomputed {...config} />

export default Howy
