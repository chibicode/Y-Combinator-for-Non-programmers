import { VariableNames } from 'src/types/yc/VariableNames'
import {
  ExpressionParams,
  FunctionExpressionParams
} from 'src/types/yc/ExpressionParamTypes'

const nest = (
  f: VariableNames,
  x: VariableNames,
  n: number
): ExpressionParams => {
  if (n === 0) {
    return x
  } else {
    return [f, nest(f, x, n - 1)]
  }
}

export const numberParams = (
  f: VariableNames,
  x: VariableNames,
  n: number
): FunctionExpressionParams => {
  return {
    arg: f,
    body: {
      arg: x,
      body: nest(f, x, n)
    }
  }
}
