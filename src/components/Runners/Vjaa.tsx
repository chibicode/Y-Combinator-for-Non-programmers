import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/vjaa.json'

// @ts-ignore
const Vjaa = () => <ExpressionRunnerPrecomputed {...config} />

export default Vjaa
