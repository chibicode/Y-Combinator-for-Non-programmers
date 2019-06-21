import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/rmsd'

const Rmsd = () => <ExpressionRunnerPrecomputed {...config} />

export default Rmsd
