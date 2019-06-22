import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/imgp.json'

// @ts-ignore
const Imgp = () => <ExpressionRunnerPrecomputed {...config} />

export default Imgp
