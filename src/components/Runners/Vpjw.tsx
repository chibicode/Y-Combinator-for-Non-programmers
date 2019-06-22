import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/vpjw.json'

// @ts-ignore
const Vpjw = () => <ExpressionRunnerPrecomputed {...config} />

export default Vpjw
