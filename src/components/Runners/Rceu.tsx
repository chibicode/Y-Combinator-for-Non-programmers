import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/rceu.json'

// @ts-ignore
const Rceu = () => <ExpressionRunnerPrecomputed {...config} />

export default Rceu
