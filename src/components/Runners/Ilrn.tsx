import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ilrn.json'

// @ts-ignore
const Ilrn = () => <ExpressionRunnerPrecomputed {...config} />

export default Ilrn
