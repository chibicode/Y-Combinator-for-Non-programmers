import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/qvxe.json'

// @ts-ignore
const Qvxe = () => <ExpressionRunnerPrecomputed {...config} />

export default Qvxe
