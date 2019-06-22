import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/xsgz.json'

// @ts-ignore
const Xsgz = () => <ExpressionRunnerPrecomputed {...config} />

export default Xsgz
