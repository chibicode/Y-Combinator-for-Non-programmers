import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/uemm.json'

// @ts-ignore
const Uemm = () => <ExpressionRunnerPrecomputed {...config} />

export default Uemm
