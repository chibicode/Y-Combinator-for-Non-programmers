import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/hxmk.json'

// @ts-ignore
const Hxmk = () => <ExpressionRunnerPrecomputed {...config} />

export default Hxmk
