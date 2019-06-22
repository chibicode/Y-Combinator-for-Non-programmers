import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/news.json'

// @ts-ignore
const News = () => <ExpressionRunnerPrecomputed {...config} />

export default News
