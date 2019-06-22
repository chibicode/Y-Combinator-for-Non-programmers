import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/cnef.json'

// @ts-ignore
const Cnef = () => <ExpressionRunnerPrecomputed {...config} />

export default Cnef
