import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/mscz.json'

// @ts-ignore
const Mscz = () => <ExpressionRunnerPrecomputed {...config} />

export default Mscz
