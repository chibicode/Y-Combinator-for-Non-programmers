import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/lizi.json'

// @ts-ignore
const Lizi = () => <ExpressionRunnerPrecomputed {...config} />

export default Lizi
