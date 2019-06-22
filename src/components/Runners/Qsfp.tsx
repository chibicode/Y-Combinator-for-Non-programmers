import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/qsfp.json'

// @ts-ignore
const Qsfp = () => <ExpressionRunnerPrecomputed {...config} />

export default Qsfp
