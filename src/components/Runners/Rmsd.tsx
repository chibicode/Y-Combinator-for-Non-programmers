import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/rmsd.json'

// @ts-ignore
const Rmsd = () => <ExpressionRunnerPrecomputed {...config} />

export default Rmsd
