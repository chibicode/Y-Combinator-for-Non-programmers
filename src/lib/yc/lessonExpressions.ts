import initializeExpressionContainer from 'src/lib/yc/initializeExpressionContainer'
import {
  FunctionExpressionParams,
  ExpressionParams,
  CallExpressionParams
} from 'src/types/yc/ExpressionParamTypes'
import { numberParams, succParams } from 'src/lib/yc/churchEncodingParams'

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
  succParams('c', 'd', 'e'),
  'question'
])
export const e6E8 = initializeExpressionContainer([
  succParams('c', 'd', 'e'),
  numberParams('a', 'b', 0)
])

export const episode5Expression1 = initializeExpressionContainer([
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

export const episode5Expression2 = initializeExpressionContainer([
  {
    arg: 'b',
    body: {
      arg: 'e',
      body: 'e'
    }
  },
  'd',
  'a'
])

// const trueParams: FunctionExpressionParams = {
//   arg: 'd',
//   body: {
//     arg: 'e',
//     body: 'd'
//   }
// }

// const falseParams: FunctionExpressionParams = {
//   arg: 'a',
//   body: {
//     arg: 'b',
//     body: 'b'
//   }
// }

// const andParams: FunctionExpressionParams = {
//   arg: 'p',
//   body: {
//     arg: 'q',
//     body: ['p', 'q', 'p']
//   }
// }

// const notParams: FunctionExpressionParams = {
//   arg: 'a',
//   body: {
//     arg: 'b',
//     body: {
//       arg: 'c',
//       body: ['a', 'b', 'c']
//     }
//   }
// }

export const episode6Expression1 = initializeExpressionContainer([
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
  'd'
])

export const episode6Expression2 = initializeExpressionContainer([
  {
    arg: 'a',
    body: 'a'
  },
  {
    arg: 'd',
    body: [
      {
        arg: 'c',
        body: 'c'
      },
      'b'
    ]
  }
])

export const episode6Expression3 = initializeExpressionContainer({
  arg: 'd',
  body: 'b'
})

export const episode6Expression4 = initializeExpressionContainer([
  {
    arg: 'a',
    body: 'a'
  },
  ['b', 'c']
])

export const episode6Expression5 = initializeExpressionContainer(['b', 'c'])

export const episode7Expression1 = initializeExpressionContainer([
  {
    arg: 'a',
    body: {
      arg: 'b',
      body: {
        arg: 'c',
        body: 'b'
      }
    }
  },
  'b'
])

export const episode7Expression2 = initializeExpressionContainer([
  {
    arg: 'a',
    body: {
      arg: 'b',
      body: [
        {
          arg: 'c',
          body: 'c'
        },
        'b'
      ]
    }
  },
  'b'
])

const baseTrue: FunctionExpressionParams = {
  arg: 'd',
  body: {
    arg: 'e',
    body: 'd'
  }
}

const baseFalse: FunctionExpressionParams = {
  arg: 'd',
  body: {
    arg: 'e',
    body: 'e'
  }
}

const baseNot: FunctionExpressionParams = {
  arg: 'a',
  body: {
    arg: 'b',
    body: {
      arg: 'c',
      body: ['a', 'c', 'b']
    }
  }
}

const baseOr: FunctionExpressionParams = {
  arg: 'e',
  body: {
    arg: 'f',
    body: ['e', 'e', 'f']
  }
}

export const oldEpisode9Expression1 = initializeExpressionContainer(baseOr)

export const oldEpisode9Expression2 = initializeExpressionContainer([
  baseOr,
  baseTrue,
  baseTrue
])

export const oldEpisode9Expression3 = initializeExpressionContainer([
  baseOr,
  baseFalse,
  baseTrue
])

export const oldEpisode9Expression4 = initializeExpressionContainer([
  baseOr,
  baseTrue,
  baseFalse
])

export const oldEpisode9Expression5 = initializeExpressionContainer([
  baseOr,
  baseFalse,
  baseFalse
])

const yCombinator: FunctionExpressionParams = {
  arg: 'a',
  body: [
    {
      arg: 'c',
      body: ['c', 'c']
    },
    {
      arg: 'c',
      body: [
        'a',
        {
          arg: 'b',
          body: ['c', 'c', 'b']
        }
      ]
    }
  ]
}

// const baseOne: FunctionExpressionParams = {
//   arg: 'a',
//   body: {
//     arg: 'b',
//     body: ['a', 'b']
//   }
// }

// const baseThree: FunctionExpressionParams = {
//   arg: 'a',
//   body: {
//     arg: 'b',
//     body: ['b', 'a', 'a', 'a']
//   }
// }

const baseSucc: FunctionExpressionParams = {
  arg: 'a',
  body: {
    arg: 'b',
    body: {
      arg: 'c',
      body: ['b', ['a', 'b', 'c']]
    }
  }
}

const basePlus: FunctionExpressionParams = {
  arg: 'a',
  body: {
    arg: 'b',
    body: {
      arg: 'c',
      body: {
        arg: 'd',
        body: [['a', 'c'], [['b', 'c'], 'd']]
      }
    }
  }
}

const baseMult: FunctionExpressionParams = {
  arg: 'a',
  body: {
    arg: 'b',
    body: {
      arg: 'c',
      body: {
        arg: 'd',
        body: [['a', ['b', 'c']], 'd']
      }
    }
  }
}

export const episode8Expression2 = initializeExpressionContainer({
  arg: 'c',
  body: {
    arg: 'd',
    body: ['c', 'd']
  }
})

export const episode8Expression3 = initializeExpressionContainer({
  arg: 'e',
  body: {
    arg: 'f',
    body: ['e', ['e', 'f']]
  }
})

export const episode8Expression4 = initializeExpressionContainer({
  arg: 'g',
  body: {
    arg: 'h',
    body: ['g', ['g', ['g', 'h']]]
  }
})

export const episode8Expression5 = initializeExpressionContainer({
  arg: 'i',
  body: {
    arg: 'j',
    body: ['i', ['i', ['i', ['i', ['i', 'j']]]]]
  }
})

const baseTwo: FunctionExpressionParams = {
  arg: 'e',
  body: {
    arg: 'f',
    body: ['e', ['e', 'f']]
  }
}

const baseFour: FunctionExpressionParams = {
  arg: 'g',
  body: {
    arg: 'h',
    body: ['g', ['g', ['g', ['g', 'h']]]]
  }
}

const baseThree: FunctionExpressionParams = {
  arg: 'i',
  body: {
    arg: 'j',
    body: ['i', ['i', ['i', 'j']]]
  }
}

export const episode8Expression6 = initializeExpressionContainer(baseTwo)

export const episode8Expression7 = initializeExpressionContainer(baseSucc)

export const episode8Expression8 = initializeExpressionContainer([
  baseSucc,
  baseTwo
])

export const episode9Expression1 = initializeExpressionContainer({
  arg: 'b',
  body: {
    arg: 'c',
    body: ['b', ['b', ['b', 'c']]]
  }
})

export const episode9Expression2 = initializeExpressionContainer(baseFour)

export const episode9Expression3 = initializeExpressionContainer([
  baseSucc,
  baseFour
])

export const episode9Expression4 = initializeExpressionContainer({
  arg: 'b',
  body: {
    arg: 'c',
    body: ['b', ['b', ['b', ['b', ['b', 'c']]]]]
  }
})

export const episode9Expression5 = initializeExpressionContainer(basePlus)

export const episode9Expression6 = initializeExpressionContainer(baseThree)

export const episode9Expression7 = initializeExpressionContainer([
  basePlus,
  baseThree,
  baseTwo
])

export const episode10Expression1 = initializeExpressionContainer({
  arg: 'c',
  body: {
    arg: 'd',
    body: ['c', ['c', ['c', ['c', ['c', 'd']]]]]
  }
})

export const episode10Expression2 = initializeExpressionContainer(baseMult)

export const episode10Expression3 = initializeExpressionContainer([
  baseMult,
  baseThree,
  baseTwo
])

export const episode10Expression4 = initializeExpressionContainer({
  arg: 'c',
  body: {
    arg: 'd',
    body: ['c', ['c', ['c', ['c', ['c', ['c', 'd']]]]]]
  }
})

export const episode11Expression1 = initializeExpressionContainer({
  arg: 'd',
  body: {
    arg: 'e',
    body: 'd'
  }
})

export const episode11Expression2 = initializeExpressionContainer({
  arg: 'f',
  body: {
    arg: 'g',
    body: 'g'
  }
})

export const episode11Expression3 = initializeExpressionContainer({
  arg: 'h',
  body: {
    arg: 'i',
    body: 'h'
  }
})

export const episode11Expression4 = initializeExpressionContainer({
  arg: 'j',
  body: {
    arg: 'k',
    body: 'k'
  }
})

export const episode11Expression5 = initializeExpressionContainer(baseTrue)

export const episode11Expression6 = initializeExpressionContainer(baseFalse)

export const episode11Expression7 = initializeExpressionContainer(baseNot)

export const episode11Expression8 = initializeExpressionContainer([
  baseNot,
  baseTrue
])

export const episode11Expression9 = initializeExpressionContainer({
  arg: 'b',
  body: {
    arg: 'c',
    body: 'c'
  }
})

export const episode11Expression10 = initializeExpressionContainer([
  baseNot,
  baseFalse
])

export const episode12Expression1 = initializeExpressionContainer({
  arg: 'b',
  body: {
    arg: 'c',
    body: 'b'
  }
})

export const yCombinatorContainer = initializeExpressionContainer(yCombinator)

// a => b => (a b)
const recursiveFunction: FunctionExpressionParams = {
  arg: 'd',
  body: {
    arg: 'e',
    body: ['d', 'e']
  }
}

export const infiniteLoop = initializeExpressionContainer([
  yCombinator,
  recursiveFunction
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

const testZero: FunctionExpressionParams = {
  arg: 'f',
  body: {
    arg: 'g',
    body: 'g'
  }
}

const testOne: FunctionExpressionParams = {
  arg: 'f',
  body: {
    arg: 'g',
    body: ['f', 'g']
  }
}

const testTwo: FunctionExpressionParams = {
  arg: 'f',
  body: {
    arg: 'g',
    body: ['f', ['f', 'g']]
  }
}

const testThree: FunctionExpressionParams = {
  arg: 'f',
  body: {
    arg: 'g',
    body: ['f', ['f', ['f', 'g']]]
  }
}

export const isZeroZero = initializeExpressionContainer(isZero(testZero))

export const isZeroOne = initializeExpressionContainer(isZero(testOne))

export const isZeroTwo = initializeExpressionContainer(isZero(testTwo))

export const isZeroThree = initializeExpressionContainer(isZero(testThree))

export const isZeroQuestion = initializeExpressionContainer(isZero('question'))
