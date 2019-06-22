import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/oiwu.json'

// @ts-ignore
const Oiwu = () => <ExpressionRunnerPrecomputed {...config} />

export default Oiwu
