import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/angp.json'

// @ts-ignore
const Angp = () => <ExpressionRunnerPrecomputed {...config} />

export default Angp
