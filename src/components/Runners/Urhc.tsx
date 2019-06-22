import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/urhc.json'

// @ts-ignore
const Urhc = () => <ExpressionRunnerPrecomputed {...config} />

export default Urhc
