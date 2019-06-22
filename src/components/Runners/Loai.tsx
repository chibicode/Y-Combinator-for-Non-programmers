import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/loai.json'

// @ts-ignore
const Loai = () => <ExpressionRunnerPrecomputed {...config} />

export default Loai
