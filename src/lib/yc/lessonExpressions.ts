import initializeExpressionContainer from 'src/lib/yc/initializeExpressionContainer'
import { FunctionExpressionParams } from 'src/types/yc/ExpressionParamTypes'

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

export const episode1Expression1 = initializeExpressionContainer([
  {
    arg: 'a',
    body: 'a'
  },
  'b'
])

export const episode1Expression2 = initializeExpressionContainer([
  {
    arg: 'c',
    body: 'c'
  },
  'd'
])

export const episode1Expression3 = initializeExpressionContainer([
  {
    arg: 'a',
    body: ['b', 'a']
  },
  'c'
])

export const episode2Expression1 = initializeExpressionContainer([
  {
    arg: 'a',
    body: {
      arg: 'b',
      body: 'a'
    }
  },
  'd'
])

export const episode2Expression2 = initializeExpressionContainer([
  {
    arg: 'a',
    body: {
      arg: 'b',
      body: {
        arg: 'c',
        body: ['a', 'b']
      }
    }
  },
  'd'
])

export const episode2Expression3 = initializeExpressionContainer({
  arg: 'c',
  body: ['d', 'd']
})

export const episode4Expression1 = initializeExpressionContainer([
  {
    arg: 'a',
    body: {
      arg: 'b',
      body: 'a'
    }
  },
  'c'
])

export const episode4Expression2 = initializeExpressionContainer([
  {
    arg: 'a',
    body: {
      arg: 'b',
      body: {
        arg: 'c',
        body: 'd'
      }
    }
  },
  'e'
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
