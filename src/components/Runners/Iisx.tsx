import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/iisx.json'

// @ts-ignore
const Iisx = () => <ExpressionRunnerPrecomputed {...config} />

export default Iisx
