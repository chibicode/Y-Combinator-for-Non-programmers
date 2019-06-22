import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/eobj.json'

// @ts-ignore
const Eobj = () => <ExpressionRunnerPrecomputed {...config} />

export default Eobj
