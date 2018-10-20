import React from 'react'
import { episode9 } from 'src/components/Yc/AllExpressionRunners'

export default () => {
  let i = 0
  return (
    <>
      {episode9[i++]()}
      {episode9[i++]()}
    </>
  )
}
