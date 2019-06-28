import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/vrko.json'

// @ts-ignore
const Vrko = () => <ExpressionRunnerPrecomputed {...config} />

export default Vrko
