import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/mame.json'

// @ts-ignore
const Mame = () => <ExpressionRunnerPrecomputed {...config} />

export default Mame
