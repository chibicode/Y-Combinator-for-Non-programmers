import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ifwb.json'

// @ts-ignore
const Ifwb = () => <ExpressionRunnerPrecomputed {...config} />

export default Ifwb
