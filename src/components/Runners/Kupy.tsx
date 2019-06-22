import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/kupy.json'

// @ts-ignore
const Kupy = () => <ExpressionRunnerPrecomputed {...config} />

export default Kupy
