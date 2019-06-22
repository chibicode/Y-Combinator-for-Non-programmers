import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/gtdu.json'

// @ts-ignore
const Gtdu = () => <ExpressionRunnerPrecomputed {...config} />

export default Gtdu
