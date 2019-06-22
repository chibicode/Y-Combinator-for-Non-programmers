import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/zvet.json'

// @ts-ignore
const Zvet = () => <ExpressionRunnerPrecomputed {...config} />

export default Zvet
