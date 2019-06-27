import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/sffm.json'

// @ts-ignore
const Sffm = () => <ExpressionRunnerPrecomputed {...config} />

export default Sffm
