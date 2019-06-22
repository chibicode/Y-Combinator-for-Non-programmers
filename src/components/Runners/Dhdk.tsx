import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/dhdk.json'

// @ts-ignore
const Dhdk = () => <ExpressionRunnerPrecomputed {...config} />

export default Dhdk
