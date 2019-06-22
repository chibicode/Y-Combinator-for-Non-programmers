import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/yklt.json'

// @ts-ignore
const Yklt = () => <ExpressionRunnerPrecomputed {...config} />

export default Yklt
