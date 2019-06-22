import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/idcf.json'

// @ts-ignore
const Idcf = () => <ExpressionRunnerPrecomputed {...config} />

export default Idcf
