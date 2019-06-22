import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/msiw.json'

// @ts-ignore
const Msiw = () => <ExpressionRunnerPrecomputed {...config} />

export default Msiw
