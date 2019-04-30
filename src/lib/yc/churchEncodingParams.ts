import { VariableNames } from 'src/types/yc/VariableNames'
import {
  ExpressionParams,
  FunctionExpressionParams,
  CallExpressionParams,
  HighlightedVariableExpressionParams
} from 'src/types/yc/ExpressionParamTypes'

export const highlighted = (
  name: VariableNames
): HighlightedVariableExpressionParams => ({
  name,
  highlighted: true
})

const nest = (
  f: VariableNames | HighlightedVariableExpressionParams,
  x: VariableNames | HighlightedVariableExpressionParams,
  n: number
): ExpressionParams => {
  if (n === 0) {
    return x
  } else {
    return [f, nest(f, x, n - 1)]
  }
}

export const numberParams = (
  f: VariableNames | HighlightedVariableExpressionParams,
  x: VariableNames | HighlightedVariableExpressionParams,
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

export const multParamsRightHighlighted = (
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
          body: [
            [highlighted(a), [highlighted(b), highlighted(c)]],
            highlighted(d)
          ]
        }
      }
    }
  }
}

export const isZeroParams = (
  a: VariableNames,
  b: VariableNames,
  c: VariableNames,
  d: VariableNames,
  e: VariableNames,
  y: ExpressionParams,
  z: ExpressionParams,
  testExpression: ExpressionParams
): CallExpressionParams => [
  [
    [
      [
        testExpression,
        {
          arg: e,
          body: {
            arg: a,
            body: {
              arg: b,
              body: b
            }
          }
        }
      ],
      {
        arg: c,
        body: {
          arg: d,
          body: c
        }
      }
    ],
    y
  ],
  z
]

export const alphaConversionSimpleExampleParams = (
  question: VariableNames | HighlightedVariableExpressionParams
): CallExpressionParams => [
  {
    arg: 'a',
    body: {
      arg: 'b',
      body: 'a'
    }
  },
  question,
  'v'
]
