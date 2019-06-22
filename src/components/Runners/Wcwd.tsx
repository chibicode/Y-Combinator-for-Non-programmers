import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/wcwd.json'

// @ts-ignore
const Wcwd = () => <ExpressionRunnerPrecomputed {...config} />

export default Wcwd
