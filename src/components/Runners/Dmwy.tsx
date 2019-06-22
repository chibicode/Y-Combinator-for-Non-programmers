import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/dmwy.json'

// @ts-ignore
const Dmwy = () => <ExpressionRunnerPrecomputed {...config} />

export default Dmwy
