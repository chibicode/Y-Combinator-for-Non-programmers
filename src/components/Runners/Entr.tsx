import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/entr.json'

// @ts-ignore
const Entr = () => <ExpressionRunnerPrecomputed {...config} />

export default Entr
