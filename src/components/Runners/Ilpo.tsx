import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ilpo.json'

// @ts-ignore
const Ilpo = () => <ExpressionRunnerPrecomputed {...config} />

export default Ilpo
