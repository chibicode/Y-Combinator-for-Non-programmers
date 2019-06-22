import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/mauj.json'

// @ts-ignore
const Mauj = () => <ExpressionRunnerPrecomputed {...config} />

export default Mauj
