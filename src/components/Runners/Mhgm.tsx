import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/mhgm.json'

// @ts-ignore
const Mhgm = () => <ExpressionRunnerPrecomputed {...config} />

export default Mhgm
