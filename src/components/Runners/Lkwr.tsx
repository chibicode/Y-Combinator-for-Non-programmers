import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/lkwr.json'

// @ts-ignore
const Lkwr = () => <ExpressionRunnerPrecomputed {...config} />

export default Lkwr
