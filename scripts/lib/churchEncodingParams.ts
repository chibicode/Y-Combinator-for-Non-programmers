import { VariableNames } from 'src/types/VariableNames'
import {
  ExpressionParams,
  FunctionExpressionParams,
  CallExpressionParams,
  HighlightedVariableExpressionParams
} from 'src/types/ExpressionParamTypes'

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

export const numberParamsHighlightNumber = (
  f: VariableNames,
  x: VariableNames,
  n: number
): FunctionExpressionParams => {
  return {
    arg: f,
    body: {
      arg: x,
      body: nest({ name: f, highlighted: true }, x, n)
    }
  }
}

export const numberParamsHighlightNonNumber = (
  f: VariableNames,
  x: VariableNames,
  n: number
): FunctionExpressionParams => {
  return {
    arg: f,
    body: {
      arg: x,
      body: nest(f, { name: x, highlighted: true }, n)
    }
  }
}

export const succParams = (
  a: VariableNames | HighlightedVariableExpressionParams,
  b: VariableNames | HighlightedVariableExpressionParams,
  c: VariableNames | HighlightedVariableExpressionParams,
  specialEffect?: true
): FunctionExpressionParams => {
  return {
    arg: a,
    body: {
      arg: b,
      body: {
        arg: c,
        body: [b, [a, b, c]]
      }
    },
    meta: specialEffect ? 'plusOneEffect' : undefined
  }
}

export const addParams = (
  a: VariableNames | HighlightedVariableExpressionParams,
  b: VariableNames | HighlightedVariableExpressionParams,
  c: VariableNames | HighlightedVariableExpressionParams,
  d: VariableNames | HighlightedVariableExpressionParams
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

export const predParams = (
  a: VariableNames | HighlightedVariableExpressionParams,
  b: VariableNames | HighlightedVariableExpressionParams,
  c: VariableNames | HighlightedVariableExpressionParams,
  d: VariableNames | HighlightedVariableExpressionParams,
  e: VariableNames | HighlightedVariableExpressionParams,
  f: VariableNames | HighlightedVariableExpressionParams,
  specialEffect?: boolean
): FunctionExpressionParams => {
  return {
    meta: specialEffect ? 'minusOneEffect' : undefined,
    arg: a,
    body: {
      arg: b,
      body: {
        arg: c,
        body: [
          a,
          {
            arg: d,
            body: {
              arg: e,
              body: [e, [d, b]]
            }
          },
          {
            arg: f,
            body: c
          },
          {
            arg: f,
            body: f
          }
        ]
      }
    }
  }
}

export const multParams = (
  a: VariableNames | HighlightedVariableExpressionParams,
  b: VariableNames | HighlightedVariableExpressionParams,
  c: VariableNames | HighlightedVariableExpressionParams,
  d: VariableNames | HighlightedVariableExpressionParams
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

export const isZeroParams = (
  a: VariableNames | HighlightedVariableExpressionParams,
  b: VariableNames | HighlightedVariableExpressionParams,
  c: VariableNames | HighlightedVariableExpressionParams,
  d: VariableNames | HighlightedVariableExpressionParams,
  e: VariableNames | HighlightedVariableExpressionParams,
  trueExpression: ExpressionParams,
  falseExpression: ExpressionParams,
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
    trueExpression
  ],
  falseExpression
]
