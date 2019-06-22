import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/hdxc.json'

// @ts-ignore
const Hdxc = () => <ExpressionRunnerPrecomputed {...config} />

export default Hdxc
