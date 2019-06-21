import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/wqdb'

const Wqdb = () => <ExpressionRunnerPrecomputed {...config} />

export default Wqdb
