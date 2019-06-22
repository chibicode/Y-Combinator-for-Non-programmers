import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/nlxe.json'

// @ts-ignore
const Nlxe = () => <ExpressionRunnerPrecomputed {...config} />

export default Nlxe
