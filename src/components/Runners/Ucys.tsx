import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ucys.json'

// @ts-ignore
const Ucys = () => <ExpressionRunnerPrecomputed {...config} />

export default Ucys
