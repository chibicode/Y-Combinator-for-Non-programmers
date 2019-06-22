import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ebag.json'

// @ts-ignore
const Ebag = () => <ExpressionRunnerPrecomputed {...config} />

export default Ebag
