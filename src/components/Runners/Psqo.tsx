import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/psqo.json'

// @ts-ignore
const Psqo = () => <ExpressionRunnerPrecomputed {...config} />

export default Psqo
