import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/lyod.json'

// @ts-ignore
const Lyod = () => <ExpressionRunnerPrecomputed {...config} />

export default Lyod
