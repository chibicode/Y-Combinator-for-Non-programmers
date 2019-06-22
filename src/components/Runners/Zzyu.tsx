import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/zzyu.json'

// @ts-ignore
const Zzyu = () => <ExpressionRunnerPrecomputed {...config} />

export default Zzyu
