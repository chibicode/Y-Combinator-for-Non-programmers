import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/wbru.json'

// @ts-ignore
const Wbru = () => <ExpressionRunnerPrecomputed {...config} />

export default Wbru
