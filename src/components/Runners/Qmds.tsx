import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/qmds.json'

// @ts-ignore
const Qmds = () => <ExpressionRunnerPrecomputed {...config} />

export default Qmds
