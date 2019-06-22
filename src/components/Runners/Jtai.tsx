import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/jtai.json'

// @ts-ignore
const Jtai = () => <ExpressionRunnerPrecomputed {...config} />

export default Jtai
