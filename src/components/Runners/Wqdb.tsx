import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/wqdb.json'

// @ts-ignore
const Wqdb = () => <ExpressionRunnerPrecomputed {...config} />

export default Wqdb
