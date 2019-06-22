import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ahsd.json'

// @ts-ignore
const Ahsd = () => <ExpressionRunnerPrecomputed {...config} />

export default Ahsd
