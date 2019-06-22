import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/tiok.json'

// @ts-ignore
const Tiok = () => <ExpressionRunnerPrecomputed {...config} />

export default Tiok
