import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/yjur.json'

// @ts-ignore
const Yjur = () => <ExpressionRunnerPrecomputed {...config} />

export default Yjur
