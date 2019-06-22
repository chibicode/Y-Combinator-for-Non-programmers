import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/jliw.json'

// @ts-ignore
const Jliw = () => <ExpressionRunnerPrecomputed {...config} />

export default Jliw
