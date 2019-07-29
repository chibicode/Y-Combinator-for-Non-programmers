import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ditw.json'

// @ts-ignore
const Ditw = () => <ExpressionRunnerPrecomputed {...config} />

export default Ditw
