import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/rome'

const Rome = () => <ExpressionRunnerPrecomputed {...config} />

export default Rome