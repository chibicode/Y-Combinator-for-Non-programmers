import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/emme.json'

// @ts-ignore
const Emme = () => <ExpressionRunnerPrecomputed {...config} />

export default Emme
