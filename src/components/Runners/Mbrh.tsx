import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/mbrh.json'

// @ts-ignore
const Mbrh = () => <ExpressionRunnerPrecomputed {...config} />

export default Mbrh
