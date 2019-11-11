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
  predParams,
  numberParamsHighlightNumber,
  numberParamsHighlightNonNumber
} from 'scripts/lib/churchEncodingParams'

export const prxd = initializeExpressionContainer({
  shorthandFunc: 'add'
})

export const nyhe = initializeExpressionContainer([
  {
    arg: 'a',
    body: 'a'
  },
  'b'
])

export const sckn = initializeExpressionContainer([
  {
    arg: 'a',
    body: 'f'
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

export const sisf = initializeExpressionContainer([
  {
    arg: 'f',
    body: 'f'
  },
  {
    arg: 'g',
    body: 'o'
  }
])

export const ysyy = initializeExpressionContainer([
  {
    arg: 'h',
    body: 'i'
  },
  {
    arg: 'j',
    body: 'p'
  }
])

export const gvjy = initializeExpressionContainer([
  {
    arg: 'k',
    body: 'k'
  },
  'l'
])

export const neny = initializeExpressionContainer([
  {
    arg: 'k',
    body: 'm'
  },
  {
    arg: 'l',
    body: 'n'
  }
])

export const iuif = initializeExpressionContainer({
  arg: 'l',
  body: 'n'
})

export const gnmt = initializeExpressionContainer([
  {
    arg: { name: 'a', highlighted: true },
    body: { name: 'a', highlighted: true }
  },
  'b'
])

export const saii = initializeExpressionContainer([
  {
    arg: { name: 'c', highlighted: true },
    body: { name: 'd', highlighted: true }
  },
  'e'
])

export const bywf = initializeExpressionContainer([
  {
    arg: { name: 'f', highlighted: true },
    body: { name: 'f', highlighted: true }
  },
  {
    arg: 'g',
    body: 'o'
  }
])

export const zbzu = initializeExpressionContainer([
  {
    arg: { name: 'h', highlighted: true },
    body: { name: 'i', highlighted: true }
  },
  {
    arg: 'j',
    body: 'p'
  }
])

export const geut = initializeExpressionContainer([
  {
    arg: { name: 'k', highlighted: true },
    body: { name: 'k', highlighted: true }
  },
  'l'
])

export const srvq = initializeExpressionContainer([
  {
    arg: { name: 'k', highlighted: true },
    body: { name: 'm', highlighted: true }
  },
  {
    arg: 'l',
    body: 'n'
  }
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

export const mfca = initializeExpressionContainer([
  {
    arg: 'e',
    body: {
      arg: 'f',
      body: 'f'
    }
  },
  {
    arg: 'g',
    body: 'g'
  },
  'h'
])

export const csqx = initializeExpressionContainer([
  {
    arg: 'e',
    body: {
      arg: 'f',
      body: 'f'
    }
  },
  [
    {
      arg: 'g',
      body: 'g'
    },
    'h'
  ]
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

export const oyph = initializeExpressionContainer([
  {
    arg: 'b',
    body: [
      {
        arg: 'c',
        body: 'd'
      },
      'b'
    ]
  },
  'a'
])

export const drvy = initializeExpressionContainer({
  arg: 'b',
  body: [
    {
      arg: 'c',
      body: 'd'
    },
    'b'
  ]
})

export const oqlf = initializeExpressionContainer('a')

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

export const rlzd = initializeExpressionContainer([
  'b',
  [
    {
      arg: 'a',
      body: 'd'
    },
    'c'
  ]
])

export const mzxw = initializeExpressionContainer(numberParams('a', 'b', 0))
export const irhr = initializeDoneExpressionContainer({ shorthandNumber: 0 })
export const haeo = initializeDoneExpressionContainer({
  shorthandNumber: 0,
  shorthandNumberAfterConvert: 'number'
})
export const ntua = initializeDoneExpressionContainer({ shorthandNumber: 1 })
export const yljj = initializeDoneExpressionContainer({
  shorthandNumber: 2,
  shorthandNumberAfterConvert: 'number'
})
export const dpvy = initializeDoneExpressionContainer({
  shorthandNumber: 1,
  shorthandNumberAfterConvert: 'number'
})
export const vzjq = initializeDoneExpressionContainer([
  succParams('a', 'b', 'c'),
  {
    shorthandNumber: 1,
    shorthandNumberAfterConvert: 'number'
  }
])
export const hvqf = initializeDoneExpressionContainer([
  succParams('a', 'b', 'c'),
  {
    shorthandNumber: 1,
    shorthandNumberAfterConvert: 'number',
    initialHighlight: true
  }
])
export const nskn = initializeExpressionContainer(numberParams('e', 'f', 2))
export const qbnd = initializeExpressionContainer(numberParams('k', 'l', 2))
export const tnyj = initializeExpressionContainer(
  numberParamsHighlightNumber('k', 'l', 2)
)
export const hwnq = initializeExpressionContainer(
  numberParamsHighlightNumber('e', 'f', 2)
)
export const hdpc = initializeDoneExpressionContainer({ shorthandNumber: 2 })
export const qjcv = initializeDoneExpressionContainer({ shorthandNumber: 3 })
export const wcdn = initializeExpressionContainer(numberParams('i', 'j', 4))
export const hzkx = initializeExpressionContainer(
  numberParamsHighlightNumber('i', 'j', 4)
)
export const uarl = initializeDoneExpressionContainer({ shorthandNumber: 4 })
export const kaaf = initializeDoneExpressionContainer({
  shorthandNumber: 4,
  shorthandNumberAfterConvert: 'number'
})
export const mxkk = initializeDoneExpressionContainer({ shorthandNumber: 5 })

export const lyet = initializeExpressionContainer(numberParams('d', 'e', 0))

export const aocc = initializeExpressionContainer(
  numberParamsHighlightNumber('d', 'e', 2)
)
export const qyqi = initializeExpressionContainer(
  numberParamsHighlightNumber('d', 'b', 1)
)
export const entt = initializeExpressionContainer(
  numberParamsHighlightNumber('f', 'g', 1)
)

export const dupe = initializeExpressionContainer({
  arg: 'A',
  body: {
    arg: 'B',
    body: ['Amult', 'Bsingle']
  }
})

export const iyee = initializeExpressionContainer({
  arg: 'A',
  body: {
    arg: 'B',
    body: 'blank'
  }
})

export const qlfn = initializeExpressionContainer({
  arg: 'A',
  body: {
    arg: 'B',
    body: ['A', ['A', 'B']]
  }
})

export const lbyq = initializeExpressionContainer({
  arg: 'blank',
  body: {
    arg: 'blank',
    body: 'blank'
  }
})

export const jpac = initializeExpressionContainer(
  numberParamsHighlightNumber('g', 'h', 3)
)

export const xvjz = initializeExpressionContainer(numberParams('f', 'g', 0))
export const yqiv = initializeExpressionContainer(numberParams('d', 'h', 0))
export const aeoc = initializeExpressionContainer(numberParams('d', 'h', 1))

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

const yCombinatorApplicative: FunctionExpressionParams = {
  arg: 'a',
  body: [
    {
      arg: 'f',
      body: [
        'a',
        {
          arg: 'b',
          body: ['f', 'f', 'b']
        }
      ]
    },
    {
      arg: 'f',
      body: [
        'a',
        {
          arg: 'b',
          body: ['f', 'f', 'b']
        }
      ]
    }
  ]
}

const yCombinatorHighlighted: FunctionExpressionParams = {
  arg: highlighted('a'),
  body: [
    {
      arg: highlighted('b'),
      body: [highlighted('a'), [highlighted('b'), highlighted('b')]]
    },
    {
      arg: highlighted('b'),
      body: [highlighted('a'), [highlighted('b'), highlighted('b')]]
    }
  ]
}

export const vazr = initializeExpressionContainer(yCombinator)
export const qjod = initializeExpressionContainer(yCombinatorApplicative)

export const ekyd = initializeExpressionContainer({
  checkType: 'isZero',
  condition: {
    shorthandNumber: 0
  },
  trueCase: {
    shorthandNumber: 1
  },
  falseCase: {
    shorthandNumber: 2
  }
})

export const pslb = initializeExpressionContainer({
  checkType: 'isZero',
  condition: {
    shorthandNumber: 3
  },
  trueCase: {
    shorthandNumber: 4
  },
  falseCase: {
    shorthandNumber: 5
  }
})

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
          [
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
                [
                  {
                    shorthandFunc: 'add'
                  },
                  [
                    {
                      shorthandFunc: 'add'
                    },
                    {
                      shorthandNumber: 10
                    }
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ]
])

export const bwig = initializeExpressionContainer([
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
                shorthandNumber: 10
              }
            ]
          ]
        ]
      ]
    ]
  ]
])

export const bmar = initializeExpressionContainer([
  {
    count: 8,
    child: {
      shorthandFunc: 'pred'
    }
  },
  {
    shorthandNumber: 10
  }
])

export const dacg = initializeExpressionContainer([
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
              [
                {
                  shorthandFunc: 'pred'
                },
                {
                  shorthandNumber: 10
                }
              ]
            ]
          ]
        ]
      ]
    ]
  ]
])

export const dams = initializeExpressionContainer([
  {
    count: 4,
    child: {
      shorthandFunc: 'add'
    }
  },
  {
    shorthandNumber: 2
  }
])

export const yvfc = initializeExpressionContainer([
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
      [
        {
          shorthandFunc: 'add'
        },
        {
          shorthandNumber: 2
        }
      ]
    ]
  ]
])

export const zpil = initializeExpressionContainer([
  {
    countVariable: 'B',
    child: {
      shorthandFunc: 'add'
    }
  },
  'A'
])

export const gnpv = initializeExpressionContainer([
  {
    count: 3,
    child: {
      shorthandFunc: 'add'
    }
  },
  {
    shorthandNumber: 5
  }
])

export const zxad = initializeExpressionContainer({
  shorthandNumber: 6
})

export const odcm = initializeExpressionContainer({
  shorthandNumber: 8
})

export const qgrh = initializeExpressionContainer([
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
        shorthandNumber: 5
      }
    ]
  ]
])

export const ilhz = initializeExpressionContainer([
  {
    countVariable: 'B',
    child: {
      shorthandFunc: 'pred'
    }
  },
  'A'
])

export const ulsd = initializeExpressionContainer({
  countVariable: 'blankNumber',
  child: {
    shorthandFunc: 'add'
  }
})

export const pcdb = initializeExpressionContainer({
  countVariable: 'blankNumber',
  child: {
    shorthandFunc: 'pred'
  }
})

export const kgpl = initializeExpressionContainer(
  numberParamsHighlightNumber('g', 'h', 1)
)

export const epmt = initializeExpressionContainer(
  succParams('questionFoodGrey', 'questionFoodGrey', 'questionFoodGrey')
)

export const ikrk = initializeExpressionContainer([
  succParams('questionFoodGrey', 'questionFoodGrey', 'questionFoodGrey'),
  numberParams('d', 'e', 0)
])

export const zxji = initializeExpressionContainer([
  succParams(
    highlighted('questionFoodGrey'),
    highlighted('questionFoodGrey'),
    highlighted('questionFoodGrey')
  ),
  numberParams('d', 'e', 0)
])

export const vemg = initializeExpressionContainer(
  predParams(
    'questionFoodGrey',
    'questionFoodGrey',
    'questionFoodGrey',
    'questionFoodGrey',
    'questionFoodGrey',
    'questionFoodGrey'
  )
)

export const hswh = initializeExpressionContainer({
  shorthandNumberAfterConvert: 'blankPlusOne'
})

export const mzms = initializeExpressionContainer([
  {
    arg: highlighted('a'),
    body: {
      arg: highlighted('b'),
      body: {
        arg: highlighted('c'),
        body: [
          highlighted('b'),
          [highlighted('a'), highlighted('b'), highlighted('b')]
        ]
      }
    }
  },
  numberParams('d', 'e', 0)
])

export const ktus = initializeExpressionContainer({
  arg: 'a',
  body: {
    arg: 'b',
    body: {
      arg: 'c',
      body: ['b', ['a', 'b', 'b']]
    }
  }
})

export const kwqc = initializeExpressionContainer([
  {
    arg: 'a',
    body: {
      arg: 'b',
      body: {
        arg: 'c',
        body: ['b', ['a', 'b', 'b']]
      }
    }
  },
  numberParams('d', 'e', 0)
])

export const iqbf = initializeExpressionContainer({
  arg: 'b',
  body: {
    arg: 'c',
    body: ['b', { name: 'b', highlighted: true }]
  }
})

export const abbh = initializeExpressionContainer(
  numberParamsHighlightNonNumber('b', 'c', 1)
)

export const uqth = initializeExpressionContainer([
  succParams('a', 'b', 'c'),
  numberParams('d', 'e', 0)
])

export const oxuf = initializeExpressionContainer(
  numberParamsHighlightNumber('b', 'c', 2)
)

export const yywl = initializeExpressionContainer(
  numberParamsHighlightNumber('b', 'c', 4)
)

export const ngth = initializeExpressionContainer([
  succParams('a', 'b', 'c'),
  numberParams('f', 'g', 1)
])

export const disc = initializeExpressionContainer(succParams('a', 'b', 'c'))

export const blns = initializeExpressionContainer(succParams('A', 'B', 'C'))

export const ojsm = initializeExpressionContainer(succParams('h', 'i', 'j'))

export const orfr = initializeExpressionContainer([
  succParams(highlighted('a'), highlighted('b'), highlighted('c')),
  numberParams('d', 'b', 1)
])

export const qdoh = initializeExpressionContainer([
  succParams('a', 'b', 'c'),
  numberParams('d', 'b', 1)
])

export const zigt = initializeExpressionContainer({
  arg: 'b',
  body: {
    arg: 'c',
    body: ['b', ['c', 'c']]
  }
})

export const uwoq = initializeExpressionContainer({
  arg: 'b',
  body: {
    arg: 'c',
    body: [
      'b',
      [
        { name: 'c', highlighted: true },
        { name: 'c', highlighted: true }
      ]
    ]
  }
})

export const tsms = initializeExpressionContainer('blankNumberPlusOne')
export const hipa = initializeExpressionContainer('blankNumberMinusOne')

export const kipz = initializeExpressionContainer([
  {
    arg: 'a',
    body: {
      arg: 'b',
      body: 'a'
    }
  },
  'b',
  'd'
])

export const jskq = initializeExpressionContainer({
  shorthandNumberAfterConvert: 'blankMinusOne'
})

export const xwlj = initializeExpressionContainer([
  predParams(
    'questionFoodGrey',
    'questionFoodGrey',
    'questionFoodGrey',
    'questionFoodGrey',
    'questionFoodGrey',
    'questionFoodGrey'
  ),
  {
    shorthandNumberAfterConvert: 'blank'
  }
])

export const smxz = initializeExpressionContainer(
  predParams('a', 'b', 'c', 'd', 'e', 'f')
)

export const udaf = initializeExpressionContainer([
  predParams('a', 'b', 'c', 'd', 'e', 'f'),
  numberParams('g', 'h', 1)
])

export const nhpm = initializeExpressionContainer([
  predParams('a', 'b', 'c', 'd', 'e', 'f'),
  {
    shorthandNumberAfterConvert: 'number',
    shorthandNumber: 1
  }
])

export const dyrk = initializeExpressionContainer([
  predParams('a', 'b', 'c', 'd', 'e', 'f'),
  {
    shorthandNumberAfterConvert: 'number',
    shorthandNumber: 1,
    initialHighlight: true
  }
])

export const yjhv = initializeExpressionContainer([
  predParams('a', 'b', 'c', 'd', 'e', 'f'),
  {
    shorthandNumberAfterConvert: 'number',
    shorthandNumber: 2
  }
])

export const csai = initializeExpressionContainer(
  numberParamsHighlightNumber('b', 'c', 0)
)

export const uvwt = initializeExpressionContainer(
  numberParamsHighlightNumber('g', 'h', 2)
)

export const lwpw = initializeExpressionContainer([
  predParams('a', 'b', 'c', 'd', 'e', 'f'),
  numberParams('g', 'h', 2)
])

export const myzx = initializeExpressionContainer(
  numberParamsHighlightNumber('b', 'c', 1)
)

export const vfwt = initializeExpressionContainer(
  predParams('A', 'B', 'C', 'D', 'E', 'F')
)

export const ccjv = initializeExpressionContainer(
  predParams('g', 'h', 'i', 'j', 'k', 'l')
)

export const yvkr = initializeExpressionContainer([
  succParams('a', 'b', 'c'),
  {
    shorthandNumberAfterConvert: 'blank'
  }
])

export const whey = initializeExpressionContainer([
  predParams('a', 'b', 'c', 'd', 'e', 'f'),
  {
    shorthandNumberAfterConvert: 'blank'
  }
])

export const anme = initializeExpressionContainer({
  checkType: 'isZero',
  condition: 'blankNumberGreen',
  trueCase: 'blankNumberYellow',
  falseCase: 'blankNumberRed'
})

export const zpak = initializeExpressionContainer({
  checkType: 'isZero',
  condition: { shorthandNumber: 0, initialHighlight: true },
  trueCase: 'blankNumberYellow',
  falseCase: 'blankNumberRed'
})

export const fylp = initializeExpressionContainer({
  checkType: 'isZero',
  condition: { shorthandNumber: 1, initialHighlight: true },
  trueCase: 'blankNumberYellow',
  falseCase: 'blankNumberRed'
})

export const xgav = initializeExpressionContainer('blankNumberYellow')

export const cmay = initializeExpressionContainer(
  isZeroParams(
    'a',
    'b',
    'c',
    'd',
    'e',
    { shorthandNumberAfterConvert: 'trueCase' },
    { shorthandNumberAfterConvert: 'falseCase' },
    { shorthandNumberAfterConvert: 'condition' }
  )
)

export const soer = initializeExpressionContainer(
  isZeroParams('a', 'b', 'c', 'd', 'e', 'isZero', 'isNotZero', {
    shorthandNumberAfterConvert: 'blank'
  })
)

export const kmwe = initializeExpressionContainer(
  isZeroParams(
    'a',
    'b',
    'c',
    'd',
    'e',
    'isZero',
    'isNotZero',
    numberParams(highlighted('f'), highlighted('g'), 0)
  )
)

export const rryd = initializeExpressionContainer(
  isZeroParams(
    'a',
    'b',
    'c',
    'd',
    'e',
    'isZero',
    'isNotZero',
    numberParams(highlighted('f'), highlighted('g'), 1)
  )
)

export const rpcm = initializeExpressionContainer(
  isZeroParams(
    'a',
    'b',
    'c',
    'd',
    'e',
    { shorthandNumberAfterConvert: 'trueCase' },
    { shorthandNumberAfterConvert: 'falseCase' },
    { shorthandNumberAfterConvert: 'condition', initialHighlight: true }
  )
)

export const cunp = initializeExpressionContainer('blankNumberRed')

export const psdd = initializeExpressionContainer(
  isZeroParams(
    'a',
    'b',
    'c',
    'd',
    'e',
    { shorthandNumberAfterConvert: 'trueCase' },
    { shorthandNumberAfterConvert: 'falseCase' },
    numberParams(highlighted('f'), highlighted('g'), 0)
  )
)

export const zcia = initializeExpressionContainer(
  isZeroParams(
    'a',
    'b',
    'c',
    'd',
    'e',
    { shorthandNumberAfterConvert: 'trueCase' },
    { shorthandNumberAfterConvert: 'falseCase' },
    {
      shorthandNumberAfterConvert: 'number',
      shorthandNumber: 0,
      initialHighlight: true
    }
  )
)

export const qrvj = initializeExpressionContainer({
  shorthandNumberAfterConvert: 'trueCase'
})

export const nnqw = initializeExpressionContainer(
  isZeroParams(
    'a',
    'b',
    'c',
    'd',
    'e',
    { shorthandNumberAfterConvert: 'trueCase' },
    { shorthandNumberAfterConvert: 'falseCase' },
    numberParams(highlighted('f'), highlighted('g'), 1)
  )
)

export const vwpl = initializeExpressionContainer(
  isZeroParams(
    'a',
    'b',
    'c',
    'd',
    'e',
    { shorthandNumberAfterConvert: 'trueCase' },
    { shorthandNumberAfterConvert: 'falseCase' },
    {
      shorthandNumberAfterConvert: 'number',
      shorthandNumber: 1,
      initialHighlight: true
    }
  )
)

export const xgur = initializeExpressionContainer({
  shorthandNumberAfterConvert: 'falseCase'
})

export const eryp = initializeExpressionContainer(
  isZeroParams(
    'a',
    'b',
    'c',
    'd',
    'e',
    {
      shorthandNumberAfterConvert: 'number',
      shorthandNumber: 1,
      initialHighlight: true
    },
    {
      shorthandNumberAfterConvert: 'number',
      shorthandNumber: 2,
      initialHighlight: true
    },
    {
      shorthandNumberAfterConvert: 'number',
      shorthandNumber: 0,
      initialHighlight: true
    }
  )
)

export const exhr = initializeExpressionContainer(
  isZeroParams(
    'a',
    'b',
    'c',
    'd',
    'e',
    numberParams('f', 'g', 1),
    numberParams('h', 'i', 2),
    numberParams('j', 'k', 0)
  )
)

export const zmua = initializeExpressionContainer(
  isZeroParams(
    'a',
    'b',
    'c',
    'd',
    'e',
    numberParams(highlighted('f'), highlighted('g'), 1),
    numberParams(highlighted('h'), highlighted('i'), 2),
    numberParams(highlighted('j'), highlighted('k'), 0)
  )
)

export const lcce = initializeExpressionContainer(
  isZeroParams(
    'A',
    'B',
    'C',
    'D',
    'E',
    { shorthandNumberAfterConvert: 'trueCase' },
    { shorthandNumberAfterConvert: 'falseCase' },
    { shorthandNumberAfterConvert: 'condition' }
  )
)

export const vwlq = initializeExpressionContainer(
  isZeroParams(
    'f',
    'g',
    'h',
    'i',
    'j',
    { shorthandNumberAfterConvert: 'trueCase' },
    { shorthandNumberAfterConvert: 'falseCase' },
    { shorthandNumberAfterConvert: 'condition' }
  )
)

export const gbbo = initializeExpressionContainer([
  {
    arg: 'f',
    body: isZeroParams(
      'a',
      'b',
      'c',
      'd',
      'e',
      numberParams('g', 'h', 2),
      [succParams('a', 'b', 'c'), 'f'],
      'f'
    )
  },
  numberParams('i', 'j', 3)
])

export const nden = initializeExpressionContainer([
  {
    arg: 'f',
    body: isZeroParams(
      highlighted('a'),
      highlighted('b'),
      highlighted('c'),
      highlighted('d'),
      highlighted('e'),
      numberParams(highlighted('g'), highlighted('h'), 2),
      [succParams(highlighted('a'), highlighted('b'), highlighted('c')), 'f'],
      'f'
    )
  },
  numberParams(highlighted('i'), highlighted('j'), 3)
])

export const loem = initializeExpressionContainer(
  numberParamsHighlightNumber('i', 'j', 3)
)

export const wvsk = initializeExpressionContainer([
  {
    arg: 'f',
    body: isZeroParams(
      'a',
      'b',
      'c',
      'd',
      'e',
      numberParams('g', 'h', 2),
      [succParams('a', 'b', 'c'), 'f'],
      'f'
    )
  },
  {
    shorthandNumber: 3,
    initialHighlight: true
  }
])

export const nuux = initializeExpressionContainer([
  {
    arg: 'f',
    body: isZeroParams(
      'a',
      'b',
      'c',
      'd',
      'e',
      numberParams('g', 'h', 2),
      [succParams('a', 'b', 'c'), 'f'],
      'f'
    )
  },
  {
    shorthandNumber: 3
  }
])

export const aqul = initializeExpressionContainer([
  {
    arg: 'f',
    body: isZeroParams(
      'a',
      'b',
      'c',
      'd',
      'e',
      {
        shorthandNumber: 2,
        initialHighlight: true
      },
      [succParams('a', 'b', 'c'), 'f'],
      'f'
    )
  },
  {
    shorthandNumber: 3
  }
])

export const syvj = initializeExpressionContainer([
  {
    arg: 'f',
    body: isZeroParams(
      'a',
      'b',
      'c',
      'd',
      'e',
      {
        shorthandNumber: 2
      },
      [succParams(highlighted('a'), highlighted('b'), highlighted('c')), 'f'],
      'f'
    )
  },
  {
    shorthandNumber: 3
  }
])

export const aqvq = initializeExpressionContainer(succParams('a', 'b', 'c'))

export const abrk = initializeExpressionContainer([
  {
    arg: 'f',
    body: isZeroParams(
      'a',
      'b',
      'c',
      'd',
      'e',
      {
        shorthandNumber: 2
      },
      [
        {
          shorthandFunc: 'add',
          initialHighlight: true
        },
        'f'
      ],
      'f'
    )
  },
  {
    shorthandNumber: 3
  }
])

export const xskc = initializeExpressionContainer([
  {
    arg: 'f',
    body: isZeroParams(
      highlighted('a'),
      highlighted('b'),
      highlighted('c'),
      highlighted('d'),
      highlighted('e'),
      {
        shorthandNumber: 2,
        initialHighlight: true
      },
      [
        {
          shorthandFunc: 'add',
          initialHighlight: true
        },
        highlighted('f')
      ],
      highlighted('f')
    )
  },
  {
    shorthandNumber: 3
  }
])

export const gxhl = initializeExpressionContainer(
  isZeroParams(
    'a',
    'b',
    'c',
    'd',
    'e',
    {
      shorthandNumber: 2,
      initialHighlight: true
    },
    [
      {
        shorthandFunc: 'add',
        initialHighlight: true
      },
      highlighted('f')
    ],
    highlighted('f')
  )
)

export const oyzh = initializeExpressionContainer({
  checkType: 'isZero',
  condition: highlighted('f'),
  trueCase: { shorthandNumber: 2, initialHighlight: true },
  falseCase: [
    { shorthandFunc: 'add', initialHighlight: true },
    highlighted('f')
  ]
})

export const exoq = initializeExpressionContainer([
  {
    arg: 'f',
    body: {
      checkType: 'isZero',
      condition: highlighted('f'),
      trueCase: { shorthandNumber: 2, initialHighlight: true },
      falseCase: [
        { shorthandFunc: 'add', initialHighlight: true },
        highlighted('f')
      ]
    }
  },
  {
    shorthandNumber: 3
  }
])

export const aiyb = initializeExpressionContainer([
  {
    arg: 'f',
    body: {
      checkType: 'isZero',
      condition: 'f',
      trueCase: { shorthandNumber: 2 },
      falseCase: [{ shorthandFunc: 'add' }, 'f']
    }
  },
  {
    shorthandNumber: 3
  }
])

export const mldl = initializeExpressionContainer([
  {
    arg: 'f',
    body: {
      checkType: 'isZero',
      condition: 'f',
      trueCase: { shorthandNumber: 2, initialHighlight: true },
      falseCase: [{ shorthandFunc: 'add', initialHighlight: true }, 'f']
    }
  },
  {
    shorthandNumber: 3,
    initialHighlight: true
  }
])

export const awxe = initializeExpressionContainer([
  {
    arg: 'bentoBox',
    body: highlighted('bentoBox')
  },
  'bentoBox'
])

export const uggy = initializeExpressionContainer([
  {
    arg: 'bentoBox',
    body: highlighted('mathBox')
  },
  'bentoBox'
])

export const xlrf = initializeExpressionContainer([
  yCombinator,
  {
    arg: 'a',
    body: {
      arg: 'f',
      body: {
        checkType: 'isZero',
        condition: 'f',
        trueCase: { shorthandNumber: 2 },
        falseCase: [
          { shorthandFunc: 'add' },
          ['a', [{ shorthandFunc: 'pred', initialHighlight: true }, 'f']]
        ]
      }
    }
  },
  {
    shorthandNumber: 3
  }
])

export const jrfk = initializeExpressionContainer([
  yCombinator,
  {
    arg: 'a',
    body: {
      arg: 'f',
      body: {
        checkType: 'isZero',
        condition: 'f',
        trueCase: { shorthandNumber: 2 },
        falseCase: [
          { shorthandFunc: 'add' },
          ['a', [{ shorthandFunc: 'pred' }, 'f']]
        ]
      }
    }
  },
  {
    shorthandNumber: 3
  }
])

export const aqni = initializeExpressionContainer([
  yCombinator,
  {
    arg: 'a',
    body: {
      arg: 'f',
      body: {
        checkType: 'isZero',
        condition: 'f',
        trueCase: { shorthandNumber: 2, initialHighlight: true },
        falseCase: [
          { shorthandFunc: 'add' },
          ['a', [{ shorthandFunc: 'pred' }, 'f']]
        ]
      }
    }
  },
  {
    shorthandNumber: 3,
    initialHighlight: true
  }
])

export const pqsi = initializeExpressionContainer([
  yCombinator,
  {
    arg: 'a',
    body: {
      arg: 'f',
      body: {
        checkType: 'isZero',
        condition: 'f',
        trueCase: { shorthandNumber: 4, initialHighlight: true },
        falseCase: [
          { shorthandFunc: 'add' },
          ['a', [{ shorthandFunc: 'pred' }, 'f']]
        ]
      }
    }
  },
  {
    shorthandNumber: 6,
    initialHighlight: true
  }
])

export const uxvq = initializeDoneExpressionContainer({ shorthandNumber: 10 })

export const reak = initializeExpressionContainer({
  checkType: 'isZero',
  condition: {
    shorthandNumber: 3
  },
  trueCase: {
    shorthandNumber: 2
  },
  falseCase: [
    { shorthandFunc: 'add' },
    ['ignoreForNow', [{ shorthandFunc: 'pred' }, { shorthandNumber: 3 }]]
  ]
})

export const edye = initializeExpressionContainer({
  checkType: 'isZero',
  condition: {
    shorthandNumber: 3,
    initialHighlight: true
  },
  trueCase: {
    shorthandNumber: 2
  },
  falseCase: [
    { shorthandFunc: 'add' },
    ['ignoreForNow', [{ shorthandFunc: 'pred' }, { shorthandNumber: 3 }]]
  ]
})

export const nrff = initializeExpressionContainer([
  { shorthandFunc: 'add' },
  {
    checkType: 'isZero',
    condition: {
      shorthandNumber: 2
    },
    trueCase: {
      shorthandNumber: 2
    },
    falseCase: [
      { shorthandFunc: 'add' },
      [
        'ignoreForNow',
        [
          { shorthandFunc: 'pred' },
          [{ shorthandFunc: 'pred' }, { shorthandNumber: 3 }]
        ]
      ]
    ]
  }
])

export const twpb = initializeExpressionContainer([
  { shorthandFunc: 'add', initialHighlight: true },
  {
    checkType: 'isZero',
    condition: {
      shorthandNumber: 2,
      initialHighlight: true
    },
    trueCase: {
      shorthandNumber: 2
    },
    falseCase: [
      { shorthandFunc: 'add' },
      [
        'ignoreForNow',
        [
          { shorthandFunc: 'pred' },
          [
            { shorthandFunc: 'pred', initialHighlight: true },
            { shorthandNumber: 3 }
          ]
        ]
      ]
    ]
  }
])

export const tsjd = initializeExpressionContainer([
  { shorthandFunc: 'add' },
  [
    { shorthandFunc: 'add' },
    {
      checkType: 'isZero',
      condition: {
        shorthandNumber: 1
      },
      trueCase: {
        shorthandNumber: 2
      },
      falseCase: [
        { shorthandFunc: 'add' },
        [
          'ignoreForNow',
          [
            { shorthandFunc: 'pred' },
            [
              { shorthandFunc: 'pred' },
              [{ shorthandFunc: 'pred' }, { shorthandNumber: 3 }]
            ]
          ]
        ]
      ]
    }
  ]
])

export const qojl = initializeExpressionContainer([
  { shorthandFunc: 'add' },
  {
    checkType: 'isZero',
    condition: {
      shorthandNumber: 2,
      initialHighlight: true
    },
    trueCase: {
      shorthandNumber: 2
    },
    falseCase: [
      { shorthandFunc: 'add' },
      [
        'ignoreForNow',
        [
          { shorthandFunc: 'pred' },
          [{ shorthandFunc: 'pred' }, { shorthandNumber: 3 }]
        ]
      ]
    ]
  }
])

export const zxhp = initializeExpressionContainer([
  { shorthandFunc: 'add', initialHighlight: true },
  [
    { shorthandFunc: 'add' },
    {
      checkType: 'isZero',
      condition: {
        shorthandNumber: 1,
        initialHighlight: true
      },
      trueCase: {
        shorthandNumber: 2
      },
      falseCase: [
        { shorthandFunc: 'add' },
        [
          'ignoreForNow',
          [
            { shorthandFunc: 'pred' },
            [
              { shorthandFunc: 'pred' },
              [
                { shorthandFunc: 'pred', initialHighlight: true },
                { shorthandNumber: 3 }
              ]
            ]
          ]
        ]
      ]
    }
  ]
])

export const ihdu = initializeExpressionContainer([
  { shorthandFunc: 'add' },
  [
    { shorthandFunc: 'add' },
    [
      { shorthandFunc: 'add' },
      {
        checkType: 'isZero',
        condition: {
          shorthandNumber: 0
        },
        trueCase: {
          shorthandNumber: 2
        },
        falseCase: [
          { shorthandFunc: 'add' },
          [
            'ignoreForNow',
            [
              { shorthandFunc: 'pred' },
              [
                { shorthandFunc: 'pred' },
                [
                  { shorthandFunc: 'pred' },
                  [{ shorthandFunc: 'pred' }, { shorthandNumber: 3 }]
                ]
              ]
            ]
          ]
        ]
      }
    ]
  ]
])

export const abou = initializeExpressionContainer([
  { shorthandFunc: 'add' },
  [
    { shorthandFunc: 'add' },
    [
      { shorthandFunc: 'add' },
      {
        checkType: 'isZero',
        condition: {
          shorthandNumber: 0,
          initialHighlight: true
        },
        trueCase: {
          shorthandNumber: 2
        },
        falseCase: [
          { shorthandFunc: 'add' },
          [
            'ignoreForNow',
            [
              { shorthandFunc: 'pred' },
              [
                { shorthandFunc: 'pred' },
                [
                  { shorthandFunc: 'pred' },
                  [{ shorthandFunc: 'pred' }, { shorthandNumber: 3 }]
                ]
              ]
            ]
          ]
        ]
      }
    ]
  ]
])

export const npmi = initializeExpressionContainer([
  { shorthandFunc: 'add', initialHighlight: true },
  [
    { shorthandFunc: 'add' },
    [
      { shorthandFunc: 'add' },
      {
        checkType: 'isZero',
        condition: {
          shorthandNumber: 0,
          initialHighlight: true
        },
        trueCase: {
          shorthandNumber: 2
        },
        falseCase: [
          { shorthandFunc: 'add' },
          [
            'ignoreForNow',
            [
              { shorthandFunc: 'pred' },
              [
                { shorthandFunc: 'pred' },
                [
                  { shorthandFunc: 'pred' },
                  [
                    { shorthandFunc: 'pred', initialHighlight: true },
                    { shorthandNumber: 3 }
                  ]
                ]
              ]
            ]
          ]
        ]
      }
    ]
  ]
])

export const znga = initializeExpressionContainer([
  { shorthandFunc: 'add' },
  [
    { shorthandFunc: 'add' },
    {
      checkType: 'isZero',
      condition: {
        shorthandNumber: 1,
        initialHighlight: true
      },
      trueCase: {
        shorthandNumber: 2
      },
      falseCase: [
        { shorthandFunc: 'add' },
        [
          'ignoreForNow',
          [
            { shorthandFunc: 'pred' },
            [
              { shorthandFunc: 'pred' },
              [{ shorthandFunc: 'pred' }, { shorthandNumber: 3 }]
            ]
          ]
        ]
      ]
    }
  ]
])

export const ohhf = initializeExpressionContainer([
  { shorthandFunc: 'add' },
  [
    { shorthandFunc: 'add' },
    [
      { shorthandFunc: 'add' },
      {
        shorthandNumber: 2
      }
    ]
  ]
])

export const dxcw = initializeExpressionContainer([
  {
    count: 3,
    child: {
      shorthandFunc: 'add'
    }
  },
  {
    shorthandNumber: 2
  }
])

export const rhzs = initializeExpressionContainer([
  {
    count: 6,
    child: {
      shorthandFunc: 'add'
    }
  },
  {
    shorthandNumber: 4
  }
])

export const rzkp = initializeExpressionContainer([
  { shorthandFunc: 'add' },
  [
    { shorthandFunc: 'add' },
    [
      { shorthandFunc: 'add' },
      [
        { shorthandFunc: 'add' },
        [
          { shorthandFunc: 'add' },
          [
            { shorthandFunc: 'add' },
            {
              shorthandNumber: 4
            }
          ]
        ]
      ]
    ]
  ]
])

export const brri = initializeExpressionContainer([
  yCombinator,
  {
    arg: 'a',
    body: {
      arg: 'f',
      body: {
        checkType: 'isZero',
        condition: 'f',
        trueCase: { name: 'A', highlighted: true },
        falseCase: [
          { shorthandFunc: 'add' },
          ['a', [{ shorthandFunc: 'pred' }, 'f']]
        ]
      }
    }
  },
  {
    name: 'B',
    highlighted: true
  }
])

export const dmgj = initializeExpressionContainer([
  yCombinatorHighlighted,
  {
    arg: 'a',
    body: {
      arg: 'f',
      body: {
        checkType: 'isZero',
        condition: 'f',
        trueCase: 'A',
        falseCase: [
          { shorthandFunc: 'add' },
          ['a', [{ shorthandFunc: 'pred' }, 'f']]
        ]
      }
    }
  },
  'B'
])

export const jtfj = initializeExpressionContainer([
  yCombinatorHighlighted,
  {
    arg: 'a',
    body: {
      arg: 'f',
      body: {
        checkType: 'isZero',
        condition: 'f',
        trueCase: 'A',
        falseCase: [
          { shorthandFunc: 'pred' },
          ['a', [{ shorthandFunc: 'pred' }, 'f']]
        ]
      }
    }
  },
  'B'
])

export const ykbi = initializeExpressionContainer([
  yCombinator,
  {
    arg: 'a',
    body: {
      arg: 'f',
      body: {
        checkType: 'isZero',
        condition: 'f',
        trueCase: 'A',
        falseCase: [
          { shorthandFunc: 'pred', initialHighlight: true },
          ['a', [{ shorthandFunc: 'pred' }, 'f']]
        ]
      }
    }
  },
  'B'
])

export const oosg = initializeExpressionContainer([
  yCombinator,
  {
    arg: 'a',
    body: {
      arg: 'f',
      body: {
        checkType: 'isZero',
        condition: 'f',
        trueCase: 'A',
        falseCase: [
          { shorthandFunc: 'add', initialHighlight: true },
          ['a', [{ shorthandFunc: 'pred' }, 'f']]
        ]
      }
    }
  },
  'B'
])

export const psxr = initializeExpressionContainer({
  arg: 'A',
  body: [
    {
      arg: 'B',
      body: ['A', ['B', 'B']]
    },
    {
      arg: 'B',
      body: ['A', ['B', 'B']]
    }
  ]
})

export const mqoa = initializeExpressionContainer({
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

export const silw = initializeExpressionContainer([
  [
    addParams('a', 'b', 'c', 'd'),
    {
      shorthandNumberAfterConvert: 'binarySecond'
    }
  ],
  {
    shorthandNumberAfterConvert: 'binaryFirst'
  }
])

export const ibzy = initializeExpressionContainer([
  [
    addParams('a', 'b', 'c', 'd'),
    {
      shorthandNumberAfterConvert: 'binarySecond',
      initialHighlight: true
    }
  ],
  {
    shorthandNumberAfterConvert: 'binaryFirst',
    initialHighlight: true
  }
])

export const yknu = initializeExpressionContainer([
  addParams('a', 'b', 'c', 'd'),
  numberParams('g', 'h', 3),
  numberParams('e', 'f', 2)
])

export const ajfq = initializeExpressionContainer(
  numberParamsHighlightNumber('c', 'd', 5)
)

export const hnzs = initializeExpressionContainer(
  numberParamsHighlightNumber('c', 'h', 6)
)

export const ibfr = initializeExpressionContainer([
  [
    addParams('a', 'b', 'c', 'd'),
    {
      shorthandNumberAfterConvert: 'number',
      shorthandNumber: 3,
      initialHighlight: true
    }
  ],
  {
    shorthandNumberAfterConvert: 'number',
    shorthandNumber: 2,
    initialHighlight: true
  }
])

export const bgiy = initializeExpressionContainer({
  shorthandNumberAfterConvert: 'number',
  shorthandNumber: 5
})

export const tjcx = initializeExpressionContainer({
  shorthandNumberAfterConvert: 'number',
  shorthandNumber: 6
})

export const acpu = initializeExpressionContainer(multParams('a', 'b', 'f'))

export const yuov = initializeExpressionContainer([
  [
    multParams('a', 'b', 'c'),
    {
      shorthandNumberAfterConvert: 'binarySecond'
    }
  ],
  {
    shorthandNumberAfterConvert: 'binaryFirst'
  }
])

export const ndtm = initializeExpressionContainer([
  multParams('a', 'b', 'c'),
  numberParams(highlighted('g'), highlighted('h'), 3),
  numberParams(highlighted('e'), highlighted('f'), 2)
])

export const rovo = initializeExpressionContainer([
  [
    multParams('a', 'b', 'c'),
    {
      shorthandNumberAfterConvert: 'number',
      shorthandNumber: 3,
      initialHighlight: true
    }
  ],
  {
    shorthandNumberAfterConvert: 'number',
    shorthandNumber: 2,
    initialHighlight: true
  }
])

export const wetc = initializeExpressionContainer([
  [
    multParams('a', 'b', 'c'),
    {
      shorthandNumberAfterConvert: 'number',
      shorthandNumber: 3
    }
  ],
  {
    shorthandNumberAfterConvert: 'number',
    shorthandNumber: 2
  }
])

export const glvb = initializeExpressionContainer([
  {
    arg: 'A',
    body: 'B'
  },
  'C'
])

export const nuoh = initializeExpressionContainer([
  {
    arg: 'A',
    body: 'A'
  },
  'B'
])

export const ntes = initializeExpressionContainer(numberParams('c', 'd', 1))

export const tgxv = initializeExpressionContainer(numberParams('g', 'h', 3))

export const nzne = initializeExpressionContainer(numberParams('b', 'f', 1))
export const fkvc = initializeExpressionContainer(numberParams('b', 'f', 2))
export const ncdj = initializeExpressionContainer(numberParams('d', 'h', 2))
export const cdda = initializeExpressionContainer(numberParams('j', 'c', 3))
export const rtum = initializeExpressionContainer(numberParams('f', 'c', 6))

export const cteb = initializeExpressionContainer([
  [multParams('a', 'b', 'f'), numberParams('j', 'c', 3)],
  numberParams('d', 'h', 2)
])

export const hgjl = initializeExpressionContainer(succParams('a', 'b', 'f'))

export const psen = initializeExpressionContainer([
  succParams('a', 'b', 'f'),
  numberParams('d', 'h', 0)
])

export const dzod = initializeExpressionContainer([
  succParams('a', 'b', 'f'),
  numberParams('d', 'h', 1)
])

export const nhmt = initializeExpressionContainer([
  succParams('a', 'b', 'f'),
  {
    shorthandNumber: 0,
    shorthandNumberAfterConvert: 'number'
  }
])

export const sjbn = initializeExpressionContainer([
  succParams('a', 'b', 'f'),
  {
    shorthandNumber: 1,
    shorthandNumberAfterConvert: 'number'
  }
])

export const jxur = initializeExpressionContainer([
  succParams('a', 'b', 'c'),
  [succParams('a', 'b', 'c'), numberParams('d', 'e', 2)]
])

export const sqcx = initializeExpressionContainer([
  succParams('a', 'b', 'c'),
  [
    succParams('a', 'b', 'c'),
    {
      shorthandNumberAfterConvert: 'number',
      shorthandNumber: 2
    }
  ]
])

export const rjyq = initializeDoneExpressionContainer({
  shorthandNumber: 6
})

export const ptsa = initializeExpressionContainer([
  {
    count: 10,
    child: {
      shorthandFunc: 'add'
    }
  },
  {
    shorthandNumber: 10
  }
])

export const qefa = initializeDoneExpressionContainer({
  shorthandNumber: 20
})

export const ygum = initializeExpressionContainer({
  binaryType: 'multiply',
  first: 'blankNumberPurple',
  second: 'blankNumberPink'
})

export const babw = initializeExpressionContainer({
  binaryType: 'multiply',
  first: {
    shorthandNumber: 2
  },
  second: {
    shorthandNumber: 3
  }
})

export const hbzd = initializeExpressionContainer({
  checkType: 'isZero',
  condition: [{ shorthandFunc: 'pred' }, 'f'],
  trueCase: { shorthandNumber: 1 },
  falseCase: {
    binaryType: 'multiply',
    first: ['a', [{ shorthandFunc: 'pred' }, 'f']],
    second: 'f'
  }
})

export const bgid = initializeExpressionContainer([
  yCombinatorHighlighted,
  {
    arg: highlighted('a'),
    body: {
      arg: highlighted('f'),
      body: {
        checkType: 'isZero',
        condition: [{ shorthandFunc: 'pred' }, 'f'],
        trueCase: { shorthandNumber: 1 },
        falseCase: {
          binaryType: 'multiply',
          first: ['a', [{ shorthandFunc: 'pred' }, 'f']],
          second: 'f'
        }
      }
    }
  },
  { name: 'blankNumber', highlighted: true }
])

export const jypn = initializeExpressionContainer([
  yCombinator,
  {
    arg: 'a',
    body: {
      arg: 'f',
      body: {
        checkType: 'isZero',
        condition: [{ shorthandFunc: 'pred' }, 'f'],
        trueCase: { shorthandNumber: 1 },
        falseCase: {
          binaryType: 'multiply',
          first: ['a', [{ shorthandFunc: 'pred' }, 'f']],
          second: 'f'
        }
      }
    }
  },
  {
    shorthandNumber: 3,
    initialHighlight: true
  }
])

export const jvmi = initializeExpressionContainer([
  yCombinator,
  {
    arg: 'a',
    body: {
      arg: 'f',
      body: {
        checkType: 'isZero',
        condition: [{ shorthandFunc: 'pred' }, 'f'],
        trueCase: { shorthandNumber: 1 },
        falseCase: {
          binaryType: 'multiply',
          first: ['a', [{ shorthandFunc: 'pred' }, 'f']],
          second: 'f'
        }
      }
    }
  },
  {
    shorthandNumber: 4,
    initialHighlight: true
  }
])

export const abhd = initializeExpressionContainer([
  yCombinator,
  {
    arg: 'a',
    body: {
      arg: 'f',
      body: {
        checkType: 'isZero',
        condition: [{ shorthandFunc: 'pred' }, 'f'],
        trueCase: { shorthandNumber: 1 },
        falseCase: {
          binaryType: 'multiply',
          first: ['a', [{ shorthandFunc: 'pred' }, 'f']],
          second: 'f'
        }
      }
    }
  },
  { name: 'blankNumber', highlighted: true }
])

export const avsj = initializeExpressionContainer({
  shorthandNumberAfterConvert: 'binaryMultiply'
})

export const yudv = initializeExpressionContainer({
  shorthandNumberAfterConvert: 'binaryAdd'
})
