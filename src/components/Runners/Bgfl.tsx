import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/bgfl'

const Bgfl = () => <ExpressionRunnerPrecomputed {...config} />

export default Bgfl