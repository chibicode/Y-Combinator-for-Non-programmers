import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/jehz.json'

// @ts-ignore
const Jehz = () => <ExpressionRunnerPrecomputed {...config} />

export default Jehz
