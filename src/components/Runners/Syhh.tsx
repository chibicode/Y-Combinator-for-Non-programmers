import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/syhh.json'

// @ts-ignore
const Syhh = () => <ExpressionRunnerPrecomputed {...config} />

export default Syhh
