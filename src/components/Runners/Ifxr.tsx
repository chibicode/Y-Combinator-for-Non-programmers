import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ifxr.json'

// @ts-ignore
const Ifxr = () => <ExpressionRunnerPrecomputed {...config} />

export default Ifxr
