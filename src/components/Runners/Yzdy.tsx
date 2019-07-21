import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/yzdy.json'

// @ts-ignore
const Yzdy = () => <ExpressionRunnerPrecomputed {...config} />

export default Yzdy
