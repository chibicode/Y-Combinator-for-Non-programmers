import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/syfp.json'

// @ts-ignore
const Syfp = () => <ExpressionRunnerPrecomputed {...config} />

export default Syfp
