import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/zysk.json'

// @ts-ignore
const Zysk = () => <ExpressionRunnerPrecomputed {...config} />

export default Zysk
