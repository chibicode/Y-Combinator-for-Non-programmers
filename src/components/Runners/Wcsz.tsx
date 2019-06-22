import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/wcsz.json'

// @ts-ignore
const Wcsz = () => <ExpressionRunnerPrecomputed {...config} />

export default Wcsz
