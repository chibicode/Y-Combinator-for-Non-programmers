import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/xjae.json'

// @ts-ignore
const Xjae = () => <ExpressionRunnerPrecomputed {...config} />

export default Xjae
