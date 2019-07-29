import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/mcug.json'

// @ts-ignore
const Mcug = () => <ExpressionRunnerPrecomputed {...config} />

export default Mcug
