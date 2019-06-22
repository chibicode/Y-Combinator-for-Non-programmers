import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ctyl.json'

// @ts-ignore
const Ctyl = () => <ExpressionRunnerPrecomputed {...config} />

export default Ctyl
