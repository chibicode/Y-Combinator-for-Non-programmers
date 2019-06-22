import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/owcy.json'

// @ts-ignore
const Owcy = () => <ExpressionRunnerPrecomputed {...config} />

export default Owcy
