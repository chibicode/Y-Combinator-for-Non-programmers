import initializeExpressionContainer from 'scripts/lib/initializeExpressionContainer'
import initializeDoneExpressionContainer from 'scripts/lib/initializeDoneExpressionContainer'
import { FunctionExpressionParams } from 'src/types/ExpressionParamTypes'
import {
  numberParams,
  succParams,
  addParams,
  multParams,
  isZeroParams,
  highlighted,
  multParamsRightHighlighted,
  predParams,
  alphaConversionSimpleExampleParams,
  numberParamsHighlightNumber
} from 'scripts/lib/churchEncodingParams'
import { magicalVariableName } from 'src/lib/specialVariableNames'

export const nyhe = initializeExpressionContainer([
  {
    arg: 'a',
    body: 'a'
  },
  'b'
])

export const txbv = initializeExpressionContainer([
  {
    arg: 'c',
    body: 'd'
  },
  'e'
])

export const yanq = initializeExpressionContainer([
  {
    arg: 'f',
    body: 'f'
  },
  'g'
])

export const zgxp = initializeExpressionContainer([
  {
    arg: 'h',
    body: 'i'
  },
  'j'
])

export const gvjy = initializeExpressionContainer([
  {
    arg: 'k',
    body: 'k'
  },
  'l'
])

export const cgui = initializeExpressionContainer([
  {
    arg: 'k',
    body: 'm'
  },
  'l'
])

export const lsbz = initializeExpressionContainer('k')

export const qcbo = initializeExpressionContainer([
  {
    arg: 'a',
    body: {
      arg: 'b',
      body: 'a'
    }
  },
  'c'
])

export const pisd = initializeExpressionContainer([
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

export const epon = initializeExpressionContainer([
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

export const kamz = initializeExpressionContainer('f')

export const atls = initializeExpressionContainer([
  {
    arg: 'd',
    body: 'd'
  },
  {
    arg: 'e',
    body: 'f'
  }
])

export const lqti = initializeExpressionContainer([
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

export const bndu = initializeExpressionContainer([
  {
    arg: 'a',
    body: 'a'
  },
  ['b', 'c']
])

export const hrdv = initializeExpressionContainer([
  'b',
  [
    {
      arg: 'a',
      body: 'a'
    },
    'c'
  ]
])

export const mzxw = initializeExpressionContainer(numberParams('a', 'b', 0))
export const ntes = initializeExpressionContainer(numberParams('c', 'd', 1))
export const nskn = initializeExpressionContainer(numberParams('e', 'f', 2))
export const tgxv = initializeExpressionContainer(numberParams('g', 'h', 3))
export const dupe = initializeExpressionContainer({
  arg: 'A',
  body: {
    arg: 'B',
    body: ['Amult', 'B']
  }
})
export const mbco = initializeExpressionContainer(numberParams('A', 'B', 2))
export const govs = initializeExpressionContainer([
  succParams('a', 'b', 'c'),
  'question'
])
export const qbbl = initializeExpressionContainer(numberParams('d', 'e', 0))
export const dova = initializeExpressionContainer([
  succParams('a', 'b', 'c'),
  numberParams('d', 'e', 0)
])
export const jpac = initializeExpressionContainer(
  numberParamsHighlightNumber('g', 'h', 3)
)
export const xesp = initializeExpressionContainer(
  numberParamsHighlightNumber('e', 'f', 2)
)
export const yscp = initializeExpressionContainer(numberParams('i', 'j', 5))
export const wzkr = initializeExpressionContainer(
  numberParamsHighlightNumber('i', 'j', 5)
)

export const yahz = initializeExpressionContainer(numberParams('d', 'e', 1))
export const kcia = initializeExpressionContainer([
  succParams('a', 'b', 'c'),
  numberParams('d', 'e', 1)
])
export const awud = initializeExpressionContainer(numberParams('d', 'e', 2))
export const wzcw = initializeExpressionContainer([
  succParams('a', 'b', 'c'),
  numberParams('d', 'e', 2)
])

export const povy = initializeExpressionContainer(numberParams('e', 'f', 1))
export const gqsr = initializeExpressionContainer(numberParams('g', 'h', 2))
export const cydn = initializeExpressionContainer([
  addParams('a', 'b', 'c', 'd'),
  'question',
  'question'
])
export const qhnf = initializeExpressionContainer([
  addParams('a', 'b', 'c', 'd'),
  numberParams('g', 'h', 2),
  numberParams('e', 'f', 1)
])
export const pubv = initializeExpressionContainer([
  addParams('a', 'b', 'c', 'd'),
  numberParams('e', 'f', 1),
  numberParams('g', 'h', 3)
])
export const hmka = initializeExpressionContainer([
  addParams('a', 'b', 'c', 'd'),
  'question',
  numberParams('e', 'f', 1)
])
export const gebx = initializeExpressionContainer([
  addParams('a', 'b', 'c', 'd'),
  'question',
  numberParams('g', 'h', 3)
])

export const qxea = initializeExpressionContainer([
  multParams('a', 'b', 'c', 'd'),
  'question',
  'question'
])

export const uhqx = initializeExpressionContainer(numberParams('e', 'f', 2))
export const utcc = initializeExpressionContainer(numberParams('g', 'h', 3))

export const jsdg = initializeExpressionContainer([
  multParams('a', 'b', 'c', 'd'),
  numberParams('g', 'h', 3),
  numberParams('e', 'f', 2)
])

export const bunh = initializeExpressionContainer(numberParams('e', 'f', 1))
export const tfqn = initializeExpressionContainer(numberParams('g', 'h', 1))

export const jzhy = initializeExpressionContainer([
  multParams('a', 'b', 'c', 'd'),
  numberParams('g', 'h', 1),
  numberParams('e', 'f', 1)
])

export const njvi = initializeExpressionContainer([
  multParamsRightHighlighted('a', 'b', 'c', 'd'),
  'question',
  'question'
])

export const jxut = initializeExpressionContainer(
  isZeroParams('a', 'b', 'c', 'd', 'e', 'y', 'z', 'question')
)

export const bjbm = initializeExpressionContainer(
  isZeroParams('a', 'b', 'c', 'd', 'e', 'y', 'z', numberParams('f', 'g', 0))
)

export const xvjz = initializeExpressionContainer(numberParams('f', 'g', 0))
export const ttks = initializeExpressionContainer(numberParams('f', 'g', 1))

export const rcfq = initializeExpressionContainer(
  isZeroParams('a', 'b', 'c', 'd', 'e', 'y', 'z', numberParams('f', 'g', 1))
)

export const axiy = initializeExpressionContainer(numberParams('f', 'g', 2))

export const pqnt = initializeExpressionContainer(
  isZeroParams('a', 'b', 'c', 'd', 'e', 'y', 'z', numberParams('f', 'g', 2))
)

export const lhek = initializeExpressionContainer(
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

export const qikx = initializeExpressionContainer(
  alphaConversionSimpleExampleParams('question')
)

export const ooeu = initializeExpressionContainer(
  alphaConversionSimpleExampleParams('c')
)

export const xryf = initializeExpressionContainer(
  alphaConversionSimpleExampleParams('d')
)

export const zgzf = initializeExpressionContainer(
  alphaConversionSimpleExampleParams(highlighted('b'))
)

export const byex = initializeExpressionContainer(numberParams('d', 'b', 1))
export const toum = initializeExpressionContainer([
  succParams('a', 'b', 'c'),
  numberParams(highlighted('d'), highlighted('b'), 1)
])
export const druk = initializeExpressionContainer([
  succParams('a', 'b', 'c', true),
  numberParams(highlighted('d'), highlighted('b'), 1)
])
export const qqiz = initializeExpressionContainer([
  predParams('a', 'b', 'c', 'd', 'e', 'f'),
  'question'
])
export const gsyt = initializeExpressionContainer(numberParams('g', 'h', 2))
export const pxps = initializeExpressionContainer([
  predParams('a', 'b', 'c', 'd', 'e', 'f'),
  numberParams(highlighted('g'), highlighted('h'), 2)
])
export const atos = initializeExpressionContainer([
  predParams('a', 'b', 'c', 'd', 'e', 'f'),
  numberParams('g', 'h', 2)
])
export const ikhw = initializeExpressionContainer({
  shorthandNumber: 2
})
export const mwvx = initializeExpressionContainer([
  predParams('a', 'b', 'c', 'd', 'e', 'f'),
  {
    shorthandNumber: 2,
    initialHighlight: true
  }
])
export const vvbc = initializeExpressionContainer({
  shorthandNumber: 2,
  shorthandUnary: 'pred'
})

export const jbvr = initializeExpressionContainer([
  {
    arg: 'i',
    body: [predParams('a', 'b', 'c', 'd', 'e', 'f'), 'i']
  },
  numberParams('g', 'h', 1)
])

export const uqdf = initializeExpressionContainer([
  {
    arg: 'i',
    body: [predParams('a', 'b', 'c', 'd', 'e', 'f'), 'i']
  },
  {
    shorthandNumber: 1,
    initialHighlight: true
  }
])

export const sqvn = initializeExpressionContainer([
  {
    arg: 'i',
    body: [predParams('a', 'b', 'c', 'd', 'e', 'f'), highlighted('i')]
  },
  {
    shorthandNumber: 1
  }
])

export const zsyl = initializeExpressionContainer([
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

export const mgiu = initializeExpressionContainer([
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

export const idkp = initializeExpressionContainer([
  {
    arg: 'i',
    body: [predParams('a', 'b', 'c', 'd', 'e', 'f'), 'i']
  },
  {
    shorthandNumber: 1
  }
])

export const kmtz = initializeExpressionContainer({
  checkType: 'isZero',
  condition: 'question',
  trueCase: 'y',
  falseCase: 'z'
})

export const pdyu = initializeExpressionContainer({
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

export const dvlj = initializeExpressionContainer([
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

export const zquq = initializeExpressionContainer([
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

export const jwta = initializeExpressionContainer([
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

export const krta = initializeExpressionContainer([
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

export const hfov = initializeExpressionContainer([
  'question',
  {
    shorthandNumber: 3
  }
])

export const aeqh = initializeExpressionContainer([
  'question',
  {
    shorthandNumber: 4
  }
])

export const pmyq = initializeExpressionContainer([
  {
    shorthandBinary: 'mult'
  },
  ['question', 'question']
])

export const anrt = initializeExpressionContainer([
  'question',
  [
    {
      shorthandBinary: 'mult'
    },
    'question'
  ]
])

export const etrh = initializeExpressionContainer([
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

export const irqm = initializeExpressionContainer([
  'question',
  {
    shorthandNumber: 5
  }
])

export const dpky = initializeExpressionContainer([
  {
    magical: true,
    name: magicalVariableName
  },
  {
    shorthandNumber: 3
  }
])

export const lles = initializeExpressionContainer([
  {
    magical: true,
    name: magicalVariableName
  },
  {
    shorthandNumber: 4
  }
])

export const ynct = initializeExpressionContainer([
  {
    magical: true,
    name: magicalVariableName
  },
  {
    shorthandNumber: 5
  }
])

export const heiy = initializeExpressionContainer([
  {
    magical: true,
    name: magicalVariableName
  },
  'someNumber'
])

export const yrrr = initializeExpressionContainer([
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

export const aizc = initializeExpressionContainer([
  {
    magical: true,
    name: magicalVariableName
  },
  'question'
])

const updatedMagicalParams: FunctionExpressionParams = {
  arg: magicalVariableName,
  body: {
    checkType: 'isZero',
    condition: {
      shorthandUnary: 'pred',
      name: magicalVariableName
    },
    trueCase: {
      shorthandNumber: 1
    },
    falseCase: [
      magicalVariableName,
      [
        {
          shorthandBinary: 'mult'
        },
        [
          's',
          {
            shorthandUnary: 'pred',
            name: magicalVariableName
          }
        ]
      ]
    ]
  }
}

export const bpua = initializeExpressionContainer([
  updatedMagicalParams,
  'question'
])

export const qexv = initializeExpressionContainer([
  {
    arg: 's',
    body: updatedMagicalParams
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

export const edvm = initializeExpressionContainer([
  [
    yCombinator,
    {
      arg: 's',
      body: updatedMagicalParams
    }
  ],
  'question'
])

export const wjxz = initializeExpressionContainer([
  [
    yCombinator,
    {
      arg: 's',
      body: updatedMagicalParams
    }
  ],
  {
    shorthandNumber: 3,
    initialHighlight: true
  }
])

export const ipyc = initializeExpressionContainer([
  [
    yCombinator,
    {
      arg: 's',
      body: updatedMagicalParams
    }
  ],
  {
    shorthandNumber: 3
  }
])

export const onbh = initializeExpressionContainer([
  {
    shorthandNumber: 3
  },
  [
    {
      shorthandBinary: 'mult'
    },
    [
      ['abbreviated', 'abbreviated'],
      {
        shorthandNumber: 2
      }
    ]
  ]
])

export const fzwa = initializeExpressionContainer([
  {
    shorthandNumber: 3
  },
  [
    {
      shorthandBinary: 'mult'
    },
    [
      {
        shorthandNumber: 2
      },
      [
        {
          shorthandBinary: 'mult'
        },
        [
          ['abbreviated', 'abbreviated'],
          {
            shorthandNumber: 1
          }
        ]
      ]
    ]
  ]
])

export const pvph = initializeExpressionContainer([
  [
    yCombinator,
    {
      arg: 's',
      body: updatedMagicalParams
    }
  ],
  {
    shorthandNumber: 4,
    initialHighlight: true
  }
])

export const nxmy = initializeExpressionContainer([
  [
    yCombinator,
    {
      arg: 's',
      body: updatedMagicalParams
    }
  ],
  {
    shorthandNumber: 5,
    initialHighlight: true
  }
])

export const vgig = initializeExpressionContainer([
  [
    yCombinator,
    {
      arg: 's',
      body: updatedMagicalParams
    }
  ],
  {
    name: 'someNumber',
    highlighted: true
  }
])

export const vfno = initializeExpressionContainer([
  [
    yCombinator,
    {
      arg: 's',
      body: updatedMagicalParams
    }
  ],
  {
    shorthandNumber: 3
  }
])

const updatedMagicalParamsForPower = (
  initialHighlight?: boolean
): FunctionExpressionParams => ({
  arg: magicalVariableName,
  body: {
    checkType: 'isZero',
    condition: {
      shorthandUnary: 'pred',
      name: magicalVariableName
    },
    trueCase: {
      shorthandNumber: 2,
      initialHighlight
    },
    falseCase: [
      {
        shorthandNumber: 2,
        initialHighlight
      },
      [
        {
          shorthandBinary: 'mult'
        },
        [
          's',
          {
            shorthandUnary: 'pred',
            name: magicalVariableName
          }
        ]
      ]
    ]
  }
})

export const gtnk = initializeExpressionContainer([
  [
    yCombinator,
    {
      arg: 's',
      body: updatedMagicalParamsForPower(true)
    }
  ],
  {
    shorthandNumber: 3
  }
])

export const hctu = initializeExpressionContainer([
  [
    yCombinator,
    {
      arg: 's',
      body: updatedMagicalParamsForPower(false)
    }
  ],
  {
    shorthandNumber: 4,
    initialHighlight: true
  }
])

export const imda = initializeExpressionContainer([
  [
    yCombinator,
    {
      arg: 's',
      body: updatedMagicalParamsForPower(true)
    }
  ],
  {
    name: 'someNumber',
    highlighted: true
  }
])

const updatedMagicalParamsCustomizable: FunctionExpressionParams = {
  arg: magicalVariableName,
  body: {
    checkType: 'isZero',
    condition: {
      shorthandUnary: 'pred',
      name: magicalVariableName
    },
    trueCase: 'question',
    falseCase: 'question'
  }
}

export const oesh = initializeExpressionContainer([
  [
    yCombinator,
    {
      arg: 's',
      body: updatedMagicalParamsCustomizable
    }
  ],
  'someNumber'
])

export const vazr = initializeExpressionContainer(yCombinator)

export const zjhi = initializeExpressionContainer({
  arg: 'c',
  body: [
    {
      arg: 'd',
      body: ['c', ['d', 'd']]
    },
    {
      arg: 'd',
      body: ['c', ['d', 'd']]
    }
  ]
})

export const nbgx = initializeExpressionContainer([
  {
    arg: 'A',
    body: 'A'
  },
  'B'
])

export const xrvm = initializeExpressionContainer([
  'questionV2',
  [
    {
      shorthandBinary: 'add'
    },
    'questionV2'
  ]
])

export const mrab = initializeExpressionContainer([
  {
    shorthandNumber: 1
  },
  [
    {
      shorthandBinary: 'add'
    },
    {
      shorthandNumber: 1
    }
  ]
])

export const vzpd = initializeDoneExpressionContainer({
  shorthandNumber: 2
})

export const cunc = initializeExpressionContainer([
  {
    shorthandNumber: 3
  },
  [
    {
      shorthandBinary: 'add'
    },
    {
      shorthandNumber: 2
    }
  ]
])

export const rxqu = initializeDoneExpressionContainer({
  shorthandNumber: 5
})

export const ocwu = initializeExpressionContainer([
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

export const fmlj = initializeDoneExpressionContainer({
  shorthandNumber: 6
})

export const zcxt = initializeExpressionContainer([
  {
    shorthandNumber: 2
  },
  [
    {
      shorthandBinary: 'remainder'
    },
    {
      shorthandNumber: 5
    }
  ]
])

export const zrwn = initializeDoneExpressionContainer({
  shorthandNumber: 1
})

export const ltys = initializeExpressionContainer([
  {
    shorthandNumber: 4
  },
  [
    {
      shorthandBinary: 'remainder'
    },
    {
      shorthandNumber: 2019
    }
  ]
])

export const pduk = initializeDoneExpressionContainer({
  shorthandNumber: 0
})

export const qsqs = initializeDoneExpressionContainer({
  shorthandNumber: 3
})

export const ognb = initializeExpressionContainer({
  checkType: 'isZero',
  condition: 'questionV2',
  trueCase: 'questionV2',
  falseCase: 'questionV2'
})

export const kysf = initializeExpressionContainer({
  checkType: 'isZero',
  condition: {
    shorthandNumber: 2
  },
  trueCase: {
    shorthandNumber: 3
  },
  falseCase: {
    shorthandNumber: 1
  }
})

export const pslb = initializeExpressionContainer({
  checkType: 'isZero',
  condition: {
    shorthandNumber: 0
  },
  trueCase: {
    shorthandNumber: 5
  },
  falseCase: {
    shorthandNumber: 4
  }
})

export const qbkn = initializeExpressionContainer([
  {
    shorthandNumber: 4
  },
  [
    {
      shorthandBinary: 'remainder'
    },
    'questionV2'
  ]
])

export const jnac = initializeExpressionContainer([
  {
    shorthandNumber: 4
  },
  [
    {
      shorthandBinary: 'remainder'
    },
    {
      shorthandNumber: 2020
    }
  ]
])

export const sbvu = initializeDoneExpressionContainer({
  shorthandNumber: 0
})

export const ydlj = initializeExpressionContainer({
  checkType: 'isZero',
  condition: {
    shorthandNumber: 0
  },
  trueCase: {
    shorthandNumber: 29
  },
  falseCase: {
    shorthandNumber: 28
  }
})

export const wkny = initializeDoneExpressionContainer({
  shorthandNumber: 28
})

export const wrps = initializeExpressionContainer({
  checkType: 'isZero',
  condition: [
    {
      shorthandNumber: 2
    },
    [
      {
        shorthandBinary: 'remainder'
      },
      {
        shorthandNumber: 5
      }
    ]
  ],
  trueCase: {
    shorthandNumber: 3
  },
  falseCase: {
    shorthandNumber: 4
  }
})

export const ised = initializeExpressionContainer({
  checkType: 'isZero',
  condition: [
    {
      shorthandNumber: 2,
      initialHighlight: true
    },
    [
      {
        shorthandBinary: 'remainder',
        initialHighlight: true
      },
      {
        shorthandNumber: 5,
        initialHighlight: true
      }
    ]
  ],
  trueCase: {
    shorthandNumber: 3
  },
  falseCase: {
    shorthandNumber: 4
  }
})

export const urrw = initializeExpressionContainer({
  checkType: 'isZero',
  condition: {
    shorthandNumber: 1,
    initialHighlight: true
  },
  trueCase: {
    shorthandNumber: 3
  },
  falseCase: {
    shorthandNumber: 4
  }
})

export const zhpt = initializeExpressionContainer({
  checkType: 'isZero',
  condition: [
    {
      shorthandNumber: 4
    },
    [
      {
        shorthandBinary: 'remainder'
      },
      'questionV2'
    ]
  ],
  trueCase: {
    shorthandNumber: 29
  },
  falseCase: {
    shorthandNumber: 28
  }
})

export const vtzk = initializeExpressionContainer({
  checkType: 'isZero',
  condition: [
    {
      shorthandNumber: 4
    },
    [
      {
        shorthandBinary: 'remainder'
      },
      {
        shorthandNumber: 2019,
        initialHighlight: true
      }
    ]
  ],
  trueCase: {
    shorthandNumber: 29
  },
  falseCase: {
    shorthandNumber: 28
  }
})

export const lmst = initializeExpressionContainer({
  checkType: 'isZero',
  condition: [
    {
      shorthandNumber: 4,
      initialHighlight: true
    },
    [
      {
        shorthandBinary: 'remainder',
        initialHighlight: true
      },
      {
        shorthandNumber: 2019,
        initialHighlight: true
      }
    ]
  ],
  trueCase: {
    shorthandNumber: 29
  },
  falseCase: {
    shorthandNumber: 28
  }
})

export const gflf = initializeExpressionContainer({
  checkType: 'isZero',
  condition: {
    shorthandNumber: 3,
    initialHighlight: true
  },
  trueCase: {
    shorthandNumber: 29
  },
  falseCase: {
    shorthandNumber: 28
  }
})

export const ybmb = initializeExpressionContainer({
  checkType: 'isZero',
  condition: [
    {
      shorthandNumber: 4
    },
    [
      {
        shorthandBinary: 'remainder'
      },
      {
        shorthandNumber: 2020,
        initialHighlight: true
      }
    ]
  ],
  trueCase: {
    shorthandNumber: 29
  },
  falseCase: {
    shorthandNumber: 28
  }
})

export const rtpi = initializeExpressionContainer({
  checkType: 'isZero',
  condition: [
    {
      shorthandNumber: 4,
      initialHighlight: true
    },
    [
      {
        shorthandBinary: 'remainder',
        initialHighlight: true
      },
      {
        shorthandNumber: 2020,
        initialHighlight: true
      }
    ]
  ],
  trueCase: {
    shorthandNumber: 29
  },
  falseCase: {
    shorthandNumber: 28
  }
})

export const ilun = initializeExpressionContainer({
  checkType: 'isZero',
  condition: {
    shorthandNumber: 0,
    initialHighlight: true
  },
  trueCase: {
    shorthandNumber: 29
  },
  falseCase: {
    shorthandNumber: 28
  }
})

export const qolg = initializeExpressionContainer({
  checkType: 'isZero',
  condition: [
    {
      shorthandNumber: 4
    },
    [
      {
        shorthandBinary: 'remainder'
      },
      {
        shorthandNumber: 2021,
        initialHighlight: true
      }
    ]
  ],
  trueCase: {
    shorthandNumber: 29
  },
  falseCase: {
    shorthandNumber: 28
  }
})

export const gxqm = initializeExpressionContainer({
  checkType: 'isZero',
  condition: [
    {
      shorthandNumber: 4,
      initialHighlight: true
    },
    [
      {
        shorthandBinary: 'remainder',
        initialHighlight: true
      },
      {
        name: 'questionV2',
        highlighted: true
      }
    ]
  ],
  trueCase: {
    shorthandNumber: 29
  },
  falseCase: {
    shorthandNumber: 28
  }
})

export const gcie = initializeExpressionContainer([
  {
    begin: 2,
    end: 3,
    child: [
      'blankNumber',
      {
        shorthandBinary: 'mult'
      }
    ]
  },
  {
    shorthandNumber: 1
  }
])

export const xcln = initializeDoneExpressionContainer({
  shorthandNumber: 6
})

export const gwwy = initializeExpressionContainer([
  {
    begin: 3,
    child: [
      'blankNumber',
      {
        shorthandBinary: 'mult'
      }
    ]
  },
  {
    begin: 2,
    child: [
      'blankNumber',
      {
        shorthandBinary: 'mult'
      }
    ]
  },
  {
    shorthandNumber: 1
  }
])

export const ygid = initializeExpressionContainer([
  {
    shorthandNumber: 3
  },
  [
    {
      shorthandBinary: 'mult'
    },
    [
      {
        shorthandNumber: 2
      },
      [
        {
          shorthandBinary: 'mult'
        },
        {
          shorthandNumber: 1
        }
      ]
    ]
  ]
])

export const gskq = initializeExpressionContainer([
  {
    begin: 2,
    end: 4,
    child: [
      'blankNumber',
      {
        shorthandBinary: 'mult'
      }
    ]
  },
  {
    shorthandNumber: 1
  }
])

export const vibe = initializeExpressionContainer([
  {
    shorthandFunc: 'add'
  },
  {
    shorthandNumber: 1
  }
])

export const kfwf = initializeExpressionContainer([
  {
    shorthandFunc: 'add'
  },
  {
    shorthandNumber: 3
  }
])

export const fpuz = initializeExpressionContainer([
  {
    shorthandFunc: 'add'
  },
  'blankNumber'
])

export const qtns = initializeExpressionContainer([
  {
    shorthandFunc: 'pred'
  },
  {
    shorthandNumber: 3
  }
])

export const ofza = initializeExpressionContainer([
  {
    shorthandFunc: 'pred'
  },
  'blankNumber'
])

export const gjyx = initializeExpressionContainer([
  {
    shorthandFunc: 'add'
  },
  [
    {
      shorthandFunc: 'add'
    },
    {
      shorthandNumber: 2
    }
  ]
])

export const qcio = initializeExpressionContainer([
  {
    shorthandFunc: 'add'
  },
  [
    {
      shorthandFunc: 'add'
    },
    [
      {
        shorthandFunc: 'add'
      },
      {
        shorthandNumber: 2
      }
    ]
  ]
])

export const wsia = initializeExpressionContainer([
  {
    shorthandFunc: 'pred'
  },
  [
    {
      shorthandFunc: 'pred'
    },
    [
      {
        shorthandFunc: 'pred'
      },
      [
        {
          shorthandFunc: 'pred'
        },
        {
          shorthandNumber: 5
        }
      ]
    ]
  ]
])

export const rnth = initializeExpressionContainer([
  {
    shorthandFunc: 'add'
  },
  [
    {
      shorthandFunc: 'add'
    },
    [
      'verticalDotDotDot',
      [
        {
          shorthandFunc: 'add'
        },
        [
          {
            shorthandFunc: 'add'
          },
          {
            shorthandNumber: 10000
          }
        ]
      ]
    ]
  ]
])
