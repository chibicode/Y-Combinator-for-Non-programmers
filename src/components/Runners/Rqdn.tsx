import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/rqdn.json'

// @ts-ignore
const Rqdn = () => <ExpressionRunnerPrecomputed {...config} />

export default Rqdn
