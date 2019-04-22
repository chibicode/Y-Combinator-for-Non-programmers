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

export const succParams = (
  a: VariableNames,
  b: VariableNames,
  c: VariableNames
): FunctionExpressionParams => {
  return {
    arg: a,
    body: {
      arg: b,
      body: {
        arg: c,
        body: [b, [a, b, c]]
      }
    }
  }
}

export const addParams = (
  a: VariableNames,
  b: VariableNames,
  c: VariableNames,
  d: VariableNames
): FunctionExpressionParams => {
  return {
    arg: a,
    body: {
      arg: b,
      body: {
        arg: c,
        body: {
          arg: d,
          body: [[a, c], [[b, c], d]]
        }
      }
    }
  }
}

export const multParams = (
  a: VariableNames,
  b: VariableNames,
  c: VariableNames,
  d: VariableNames
): FunctionExpressionParams => {
  return {
    arg: a,
    body: {
      arg: b,
      body: {
        arg: c,
        body: {
          arg: d,
          body: [[a, [b, c]], d]
        }
      }
    }
  }
}
