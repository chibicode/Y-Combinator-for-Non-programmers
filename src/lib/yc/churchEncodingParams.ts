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
  n: number,
  focused?: boolean
): FunctionExpressionParams => {
  return {
    arg: f,
    body: {
      arg: x,
      body: nest(f, x, n)
    },
    meta: focused
      ? {
          focused
        }
      : undefined
  }
}

export const succParams = (
  a: VariableNames | HighlightedVariableExpressionParams,
  b: VariableNames | HighlightedVariableExpressionParams,
  c: VariableNames | HighlightedVariableExpressionParams,
  focused?: boolean
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
    meta: focused
      ? {
          focused
        }
      : undefined
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

export const predParams = (
  a: VariableNames,
  b: VariableNames,
  c: VariableNames,
  d: VariableNames,
  e: VariableNames,
  f: VariableNames
): FunctionExpressionParams => {
  return {
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
  a: VariableNames | HighlightedVariableExpressionParams,
  b: VariableNames | HighlightedVariableExpressionParams,
  c: VariableNames | HighlightedVariableExpressionParams,
  d: VariableNames | HighlightedVariableExpressionParams,
  e: VariableNames | HighlightedVariableExpressionParams,
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

export const addOneItemParams = (
  a: VariableNames | HighlightedVariableExpressionParams,
  b: VariableNames | HighlightedVariableExpressionParams
): FunctionExpressionParams => ({
  arg: a,
  body: [a, b]
})

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

export const alphaConvertExampleParams = (
  x: VariableNames | HighlightedVariableExpressionParams
): CallExpressionParams => {
  return [
    {
      arg: 'a',
      body: {
        arg: x,
        body: ['a', x]
      }
    },
    'v',
    'u'
  ]
}
