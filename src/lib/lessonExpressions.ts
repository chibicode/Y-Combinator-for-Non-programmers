import initializeExpressionContainer from 'src/lib/initializeExpressionContainer'
import {
  FunctionExpressionParams,
  ExpressionParams,
  CallExpressionParams
} from 'src/types/ExpressionParamTypes'
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
} from 'src/lib/churchEncodingParams'
import { magicalVariableName } from 'src/lib/specialVariableNames'

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

export const e10E1 = initializeExpressionContainer(
  alphaConversionSimpleExampleParams('question')
)

export const e10E2 = initializeExpressionContainer(
  alphaConversionSimpleExampleParams('c')
)

export const e10E3 = initializeExpressionContainer(
  alphaConversionSimpleExampleParams('d')
)

export const e10E4 = initializeExpressionContainer(
  alphaConversionSimpleExampleParams(highlighted('b'))
)

export const e11E1 = initializeExpressionContainer(numberParams('d', 'b', 1))
export const e11E2 = initializeExpressionContainer([
  succParams('a', 'b', 'c'),
  numberParams(highlighted('d'), highlighted('b'), 1)
])
export const e11E3 = initializeExpressionContainer([
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
export const e12E7 = initializeExpressionContainer({
  shorthandNumber: 2,
  shorthandUnary: 'pred'
})

export const e12E8 = initializeExpressionContainer([
  {
    arg: 'i',
    body: [predParams('a', 'b', 'c', 'd', 'e', 'f'), 'i']
  },
  numberParams('g', 'h', 1)
])

export const e12E9 = initializeExpressionContainer([
  {
    arg: 'i',
    body: [predParams('a', 'b', 'c', 'd', 'e', 'f'), 'i']
  },
  {
    shorthandNumber: 1,
    initialHighlight: true
  }
])

export const e12E10 = initializeExpressionContainer([
  {
    arg: 'i',
    body: [predParams('a', 'b', 'c', 'd', 'e', 'f'), highlighted('i')]
  },
  {
    shorthandNumber: 1
  }
])

export const e12E11 = initializeExpressionContainer([
  {
    arg: 'i',
    body: {
      shorthandUnary: 'pred',
      name: 'i',
      initialHighlight: true
    }
  },
  {
    shorthandNumber: 1
  }
])

export const e12E12 = initializeExpressionContainer([
  {
    arg: 'i',
    body: {
      shorthandUnary: 'pred',
      name: 'i'
    }
  },
  {
    shorthandNumber: 1
  }
])

export const e13E1 = initializeExpressionContainer({
  checkType: 'isZero',
  condition: 'question',
  trueCase: 'y',
  falseCase: 'z'
})

export const e13E2 = initializeExpressionContainer({
  checkType: 'isZero',
  condition: {
    shorthandNumber: 3
  },
  trueCase: {
    shorthandNumber: 4
  },
  falseCase: {
    shorthandNumber: 2
  }
})

export const e13E3 = initializeExpressionContainer([
  [
    {
      arg: 'a',
      body: {
        checkType: 'isZero',
        condition: 'a',
        trueCase: {
          arg: 'b',
          body: 'b'
        },
        falseCase: {
          shorthandNumber: 1
        }
      }
    },
    {
      shorthandNumber: 0
    }
  ],
  {
    shorthandNumber: 2
  }
])

export const e13E4 = initializeExpressionContainer([
  [
    {
      arg: 'a',
      body: isZeroParams(
        { name: 'b', highlighted: true },
        { name: 'c', highlighted: true },
        { name: 'd', highlighted: true },
        { name: 'e', highlighted: true },
        { name: 'f', highlighted: true },
        {
          arg: { name: 'g', highlighted: true },
          body: { name: 'g', highlighted: true }
        },
        {
          shorthandNumber: 1,
          initialHighlight: true
        },
        { name: 'a', highlighted: true }
      )
    },
    {
      shorthandNumber: 0
    }
  ],
  {
    shorthandNumber: 2
  }
])

export const e13E5 = initializeExpressionContainer([
  [
    {
      arg: 'a',
      body: isZeroParams(
        'b',
        'c',
        'd',
        'e',
        'f',
        {
          arg: 'g',
          body: 'g'
        },
        numberParams(highlighted('h'), highlighted('i'), 1),
        'a'
      )
    },
    numberParams(highlighted('j'), highlighted('k'), 0)
  ],
  numberParams(highlighted('l'), highlighted('m'), 2)
])

export const e13E6 = initializeExpressionContainer([
  [
    {
      arg: 'a',
      body: isZeroParams(
        'b',
        'c',
        'd',
        'e',
        'f',
        {
          arg: 'g',
          body: 'g'
        },
        numberParams('h', 'i', 1),
        'a'
      )
    },
    numberParams('j', 'k', 0)
  ],
  numberParams('l', 'm', 2)
])

export const e13E7 = initializeExpressionContainer([
  'question',
  {
    shorthandNumber: 3
  }
])

export const e13E8 = initializeExpressionContainer([
  'question',
  {
    shorthandNumber: 4
  }
])

export const e13E9 = initializeExpressionContainer([
  {
    shorthandBinary: 'mult'
  },
  ['question', 'question']
])

export const e13E10 = initializeExpressionContainer([
  'question',
  [
    {
      shorthandBinary: 'mult'
    },
    'question'
  ]
])

export const e13E11 = initializeExpressionContainer([
  {
    shorthandNumber: 3
  },
  [
    {
      shorthandBinary: 'mult'
    },
    {
      shorthandNumber: 2
    }
  ]
])

export const e13E12 = initializeExpressionContainer([
  'question',
  {
    shorthandNumber: 5
  }
])

export const e14E1 = initializeExpressionContainer([
  {
    magical: true,
    name: magicalVariableName
  },
  {
    shorthandNumber: 3
  }
])

export const e14E2 = initializeExpressionContainer([
  {
    magical: true,
    name: magicalVariableName
  },
  {
    shorthandNumber: 4
  }
])

export const e14E3 = initializeExpressionContainer([
  {
    magical: true,
    name: magicalVariableName
  },
  {
    shorthandNumber: 5
  }
])

export const e14E4 = initializeExpressionContainer([
  {
    magical: true,
    name: magicalVariableName
  },
  'someNumber'
])

export const e14E5 = initializeExpressionContainer([
  'someNumber',
  {
    shorthandBinary: 'mult'
  },
  {
    someNumber: true,
    shorthandNumber: 1
  },
  {
    shorthandBinary: 'mult'
  },
  'abbreviated',
  {
    shorthandBinary: 'mult'
  },
  {
    shorthandNumber: 2
  },
  {
    shorthandBinary: 'mult'
  },
  {
    shorthandNumber: 1
  }
])

export const e14E6 = initializeExpressionContainer([
  {
    magical: true,
    name: magicalVariableName
  },
  'question'
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
      body: {
        checkType: 'isZero',
        condition: {
          name: 'd',
          shorthandUnary: 'pred'
        },
        trueCase: {
          shorthandNumber: 1
        },
        falseCase: [
          'd',
          [
            {
              shorthandBinary: 'mult'
            },
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
    }
  },
  {
    shorthandNumber: 3
  }
])
