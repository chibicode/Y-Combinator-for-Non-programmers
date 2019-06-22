import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/davn.json'

// @ts-ignore
const Davn = () => <ExpressionRunnerPrecomputed {...config} />

export default Davn
