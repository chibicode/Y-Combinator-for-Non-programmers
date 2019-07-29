import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/rviy.json'

// @ts-ignore
const Rviy = () => <ExpressionRunnerPrecomputed {...config} />

export default Rviy
