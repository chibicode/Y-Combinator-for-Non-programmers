import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/ines.json'

// @ts-ignore
const Ines = () => <ExpressionRunnerPrecomputed {...config} />

export default Ines
