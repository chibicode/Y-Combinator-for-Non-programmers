import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/sisn.json'

// @ts-ignore
const Sisn = () => <ExpressionRunnerPrecomputed {...config} />

export default Sisn
