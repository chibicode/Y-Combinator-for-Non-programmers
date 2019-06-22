import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/vxnm.json'

// @ts-ignore
const Vxnm = () => <ExpressionRunnerPrecomputed {...config} />

export default Vxnm
