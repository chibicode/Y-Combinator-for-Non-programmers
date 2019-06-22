import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/lrja.json'

// @ts-ignore
const Lrja = () => <ExpressionRunnerPrecomputed {...config} />

export default Lrja
