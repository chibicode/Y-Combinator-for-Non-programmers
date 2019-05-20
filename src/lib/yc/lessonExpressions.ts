import initializeExpressionContainer from 'src/lib/yc/initializeExpressionContainer'
import {
  FunctionExpressionParams,
  ExpressionParams,
  CallExpressionParams
} from 'src/types/yc/ExpressionParamTypes'
import {
  numberParams,
  succParams,
  addParams,
  multParams,
  isZeroParams,
  highlighted,
  multParamsRightHighlighted,
  predParams,
  alphaConversionSimpleExampleParams
} from 'src/lib/yc/churchEncodingParams'

export const e1E1 = initializeExpressionContainer([
  {
    arg: 'a',
    body: 'a'
  },
  'b'
])

export const e1E2 = initializeExpressionContainer([
  {
    arg: 'c',
    body: 'd'
  },
  'e'
])

export const e1E3 = initializeExpressionContainer([
  {
    arg: 'f',
    body: 'f'
  },
  'g'
])

export const e1E4 = initializeExpressionContainer([
  {
    arg: 'h',
    body: 'i'
  },
  'j'
])

export const e1E5 = initializeExpressionContainer([
  {
    arg: 'k',
    body: 'k'
  },
  'l'
])

export const e1E6 = initializeExpressionContainer([
  {
    arg: 'k',
    body: 'm'
  },
  'l'
])

export const e1E7 = initializeExpressionContainer('k')

export const e2E1 = initializeExpressionContainer([
  {
    arg: 'a',
    body: {
      arg: 'b',
      body: 'a'
    }
  },
  'c'
])

export const e3E1 = initializeExpressionContainer([
  {
    arg: 'a',
    body: {
      arg: 'b',
      body: 'a'
    }
  },
  'c',
  'd'
])

export const e3E2 = initializeExpressionContainer([
  {
    arg: 'e',
    body: {
      arg: 'f',
      body: 'f'
    }
  },
  'g',
  'h'
])

export const e3E3 = initializeExpressionContainer('f')

export const e3E5 = initializeExpressionContainer([
  {
    arg: 'd',
    body: 'd'
  },
  {
    arg: 'e',
    body: 'f'
  }
])

export const e5E1 = initializeExpressionContainer([
  {
    arg: 'b',
    body: [
      {
        arg: 'c',
        body: 'c'
      },
      'b'
    ]
  },
  'a'
])

export const e5E2 = initializeExpressionContainer([
  {
    arg: 'a',
    body: 'a'
  },
  ['b', 'c']
])

export const e5E3 = initializeExpressionContainer([
  'b',
  [
    {
      arg: 'a',
      body: 'a'
    },
    'c'
  ]
])

export const e6E1 = initializeExpressionContainer(numberParams('a', 'b', 0))
export const e6E2 = initializeExpressionContainer(numberParams('c', 'd', 1))
export const e6E3 = initializeExpressionContainer(numberParams('e', 'f', 2))
export const e6E4 = initializeExpressionContainer(numberParams('g', 'h', 3))
export const e6E5 = initializeExpressionContainer({
  arg: 'A',
  body: {
    arg: 'B',
    body: ['question', 'B']
  }
})
export const e6E6 = initializeExpressionContainer(numberParams('A', 'B', 2))
export const e6E7 = initializeExpressionContainer([
  succParams('a', 'b', 'c'),
  'question'
])
export const e6E8 = initializeExpressionContainer(numberParams('d', 'e', 0))
export const e6E9 = initializeExpressionContainer([
  succParams('a', 'b', 'c'),
  numberParams('d', 'e', 0)
])

export const e7E1 = initializeExpressionContainer(numberParams('d', 'e', 1))
export const e7E2 = initializeExpressionContainer([
  succParams('a', 'b', 'c'),
  numberParams('d', 'e', 1)
])
export const e7E3 = initializeExpressionContainer(numberParams('d', 'e', 2))
export const e7E4 = initializeExpressionContainer([
  succParams('a', 'b', 'c'),
  numberParams('d', 'e', 2)
])

export const e7E5 = initializeExpressionContainer(numberParams('e', 'f', 1))
export const e7E6 = initializeExpressionContainer(numberParams('g', 'h', 2))
export const e7E7 = initializeExpressionContainer([
  addParams('a', 'b', 'c', 'd'),
  'question',
  'question'
])
export const e7E8 = initializeExpressionContainer([
  addParams('a', 'b', 'c', 'd'),
  numberParams('g', 'h', 2),
  numberParams('e', 'f', 1)
])
export const e7E9 = initializeExpressionContainer([
  addParams('a', 'b', 'c', 'd'),
  numberParams('e', 'f', 1),
  numberParams('g', 'h', 3)
])

export const e8E1 = initializeExpressionContainer([
  multParams('a', 'b', 'c', 'd'),
  'question',
  'question'
])

export const e8E2 = initializeExpressionContainer(numberParams('e', 'f', 2))
export const e8E3 = initializeExpressionContainer(numberParams('g', 'h', 3))

export const e8E4 = initializeExpressionContainer([
  multParams('a', 'b', 'c', 'd'),
  numberParams('g', 'h', 3),
  numberParams('e', 'f', 2)
])

export const e8E5 = initializeExpressionContainer(numberParams('e', 'f', 1))
export const e8E6 = initializeExpressionContainer(numberParams('g', 'h', 1))

export const e8E7 = initializeExpressionContainer([
  multParams('a', 'b', 'c', 'd'),
  numberParams('g', 'h', 1),
  numberParams('e', 'f', 1)
])

export const e8E8 = initializeExpressionContainer([
  multParamsRightHighlighted('a', 'b', 'c', 'd'),
  'question',
  'question'
])

export const isZero = (e: ExpressionParams): CallExpressionParams => [
  [
    [
      [
        e,
        {
          arg: 'e',
          body: {
            arg: 'a',
            body: {
              arg: 'b',
              body: 'b'
            }
          }
        }
      ],
      {
        arg: 'c',
        body: {
          arg: 'd',
          body: 'c'
        }
      }
    ],
    'y'
  ],
  'z'
]

export const e9E1 = initializeExpressionContainer(
  isZeroParams('a', 'b', 'c', 'd', 'e', 'y', 'z', 'question')
)

export const e9E2 = initializeExpressionContainer(
  isZeroParams('a', 'b', 'c', 'd', 'e', 'y', 'z', numberParams('f', 'g', 0))
)

export const e9E3 = initializeExpressionContainer(numberParams('f', 'g', 0))
export const e9E4 = initializeExpressionContainer(numberParams('f', 'g', 1))

export const e9E5 = initializeExpressionContainer(
  isZeroParams('a', 'b', 'c', 'd', 'e', 'y', 'z', numberParams('f', 'g', 1))
)

export const e9E6 = initializeExpressionContainer(numberParams('f', 'g', 2))

export const e9E7 = initializeExpressionContainer(
  isZeroParams('a', 'b', 'c', 'd', 'e', 'y', 'z', numberParams('f', 'g', 2))
)

export const e9E8 = initializeExpressionContainer(
  isZeroParams(
    'a',
    'b',
    'c',
    'd',
    'e',
    'y',
    { arg: 'w', body: 'x' },
    'question'
  )
)

export const e10E1 = initializeExpressionContainer([
  {
    arg: 'b',
    body: ['b', 'b']
  },
  {
    arg: 'b',
    body: ['b', 'b']
  }
])

export const e10E2 = initializeExpressionContainer('b')

export const e10E3 = initializeExpressionContainer([
  {
    arg: 'b',
    body: ['question', ['b', 'b']]
  },
  {
    arg: 'b',
    body: ['question', ['b', 'b']]
  }
])

export const e10E4 = initializeExpressionContainer(succParams('c', 'd', 'e'))

export const e10E5 = initializeExpressionContainer([
  {
    arg: 'b',
    body: [
      succParams(highlighted('c'), highlighted('d'), highlighted('e')),
      ['b', 'b']
    ]
  },
  {
    arg: 'b',
    body: [
      succParams(highlighted('c'), highlighted('d'), highlighted('e')),
      ['b', 'b']
    ]
  }
])

export const e11E1 = initializeExpressionContainer(
  alphaConversionSimpleExampleParams('question')
)

export const e11E2 = initializeExpressionContainer(
  alphaConversionSimpleExampleParams('c')
)

export const e11E3 = initializeExpressionContainer(
  alphaConversionSimpleExampleParams('d')
)

export const e11E4 = initializeExpressionContainer(
  alphaConversionSimpleExampleParams(highlighted('b'))
)

export const e11E5 = initializeExpressionContainer(numberParams('d', 'b', 1))
export const e11E6 = initializeExpressionContainer([
  succParams('a', 'b', 'c'),
  numberParams(highlighted('d'), highlighted('b'), 1)
])
export const e11E7 = initializeExpressionContainer([
  succParams('a', 'b', 'c', true),
  numberParams(highlighted('d'), highlighted('b'), 1)
])
export const e12E1 = initializeExpressionContainer([
  predParams('a', 'b', 'c', 'd', 'e', 'f'),
  'question'
])
export const e12E2 = initializeExpressionContainer(numberParams('g', 'h', 2))
export const e12E3 = initializeExpressionContainer([
  predParams('a', 'b', 'c', 'd', 'e', 'f'),
  numberParams(highlighted('g'), highlighted('h'), 2)
])
export const e12E4 = initializeExpressionContainer([
  predParams('a', 'b', 'c', 'd', 'e', 'f'),
  numberParams('g', 'h', 2)
])
export const e12E5 = initializeExpressionContainer({
  shorthandNumber: 2
})
export const e12E6 = initializeExpressionContainer([
  predParams('a', 'b', 'c', 'd', 'e', 'f'),
  {
    shorthandNumber: 2,
    initialHighlight: true
  }
])

// TODO: Show how much easier this would be using shorthand
export const e12EX = initializeExpressionContainer([
  {
    arg: 'i',
    body: [predParams('a', 'b', 'c', 'd', 'e', 'f'), 'i']
  },
  numberParams(highlighted('g'), highlighted('h'), 3)
])

export const subtractionTest = initializeExpressionContainer([
  predParams('a', 'b', 'c', 'd', 'e', 'f'),
  numberParams('g', 'h', 2)
])

const yCombinator: FunctionExpressionParams = {
  arg: 'a',
  body: [
    {
      arg: 'b',
      body: ['a', ['b', 'b']]
    },
    {
      arg: 'b',
      body: ['a', ['b', 'b']]
    }
  ]
}

export const ycTest = initializeExpressionContainer([
  yCombinator,
  {
    arg: 'c',
    body: {
      arg: 'd',
      body: [
        {
          name: 'd',
          shorthandBinary: 'isZero'
        },
        [
          'question',
          'd',
          [
            'c',
            {
              name: 'd',
              shorthandUnary: 'pred'
            }
          ]
        ]
      ]
    }
  },
  {
    shorthandNumber: 3
  }
])
