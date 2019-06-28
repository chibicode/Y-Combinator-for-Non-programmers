import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/vbdk.json'

// @ts-ignore
const Vbdk = () => <ExpressionRunnerPrecomputed {...config} />

export default Vbdk
