import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/fotb.json'

// @ts-ignore
const Fotb = () => <ExpressionRunnerPrecomputed {...config} />

export default Fotb
