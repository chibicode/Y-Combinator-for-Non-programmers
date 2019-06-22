import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/dnvw.json'

// @ts-ignore
const Dnvw = () => <ExpressionRunnerPrecomputed {...config} />

export default Dnvw
