import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/pzui.json'

// @ts-ignore
const Pzui = () => <ExpressionRunnerPrecomputed {...config} />

export default Pzui
