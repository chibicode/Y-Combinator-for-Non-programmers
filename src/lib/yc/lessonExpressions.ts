import initializeExpressionContainer from 'src/lib/yc/initializeExpressionContainer'
import { FunctionExpressionParams } from 'src/types/yc/ExpressionParamTypes'

export const episode2Expression1 = initializeExpressionContainer([
  {
    arg: 'a',
    body: 'a'
  },
  'b'
])

export const episode2Expression2 = initializeExpressionContainer([
  {
    arg: 'c',
    body: 'c'
  },
  'd'
])

export const episode3Expression1 = initializeExpressionContainer([
  {
    arg: 'a',
    body: 'b'
  },
  'c'
])

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
    body: 'd'
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
  arg: 'a',
  body: {
    arg: 'b',
    body: 'a'
  }
}

const baseFalse: FunctionExpressionParams = {
  arg: 'c',
  body: {
    arg: 'd',
    body: 'd'
  }
}

const baseNot: FunctionExpressionParams = {
  arg: 'e',
  body: {
    arg: 'f',
    body: {
      arg: 'g',
      body: ['e', 'g', 'f']
    }
  }
}

export const oldEpisode8Expression1 = initializeExpressionContainer(baseTrue)

export const oldEpisode8Expression2 = initializeExpressionContainer(baseFalse)

export const oldEpisode8Expression3 = initializeExpressionContainer(baseNot)

export const oldEpisode8Expression4 = initializeExpressionContainer([
  baseNot,
  baseTrue
])

export const oldEpisode8Expression5 = initializeExpressionContainer({
  arg: 'f',
  body: {
    arg: 'g',
    body: 'g'
  }
})

export const oldEpisode8Expression6 = initializeExpressionContainer([
  baseNot,
  baseFalse
])

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

export const episode8Expression1 = initializeExpressionContainer({
  arg: 'a',
  body: {
    arg: 'b',
    body: 'b'
  }
})

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
