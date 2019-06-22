import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/vkpm.json'

// @ts-ignore
const Vkpm = () => <ExpressionRunnerPrecomputed {...config} />

export default Vkpm
