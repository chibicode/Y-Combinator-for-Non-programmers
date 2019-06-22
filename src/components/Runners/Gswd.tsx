import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/gswd.json'

// @ts-ignore
const Gswd = () => <ExpressionRunnerPrecomputed {...config} />

export default Gswd
