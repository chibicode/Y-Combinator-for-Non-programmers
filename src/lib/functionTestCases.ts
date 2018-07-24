import ExpressionTypes from 'src/types/UndecoratedExpressionTypes'

// (❤️ => ❤️)(💙)
const basicExpression = [
  {
    arg: '❤️',
    body: '❤️',
  },
  '💙',
]

// (❤️ => 💙 => ❤️)
const trueExpression = {
  arg: '❤️',
  body: {
    arg: '💙',
    body: '❤️',
  },
}

// (❤️ => 💙 => 💙)
const falseExpression = {
  arg: '❤️',
  body: {
    arg: '💙',
    body: '💙',
  },
}

// (💚 => ❤️ => 💙 => 💚 💙 ❤️)
const notExpression = {
  arg: '💚',
  body: {
    arg: '❤️',
    body: {
      arg: '💙',
      body: ['💚', '💙', '❤️'],
    },
  },
}

const notTrueExpression = [notExpression, trueExpression]

const notFalseExpression = [notExpression, falseExpression]

// (❤️ => 💙 => 💙)
const zeroExpression = {
  arg: '❤️',
  body: {
    arg: '💙',
    body: '💙',
  },
}

// (❤️ => 💙 => ❤️ 💙)
const oneExpression = {
  arg: '❤️',
  body: {
    arg: '💙',
    body: ['❤️', '💙'],
  },
}

// (❤️ => 💙 => ❤️ (❤️ 💙))
const twoExpression = {
  arg: '❤️',
  body: {
    arg: '💙',
    body: ['❤️', ['❤️', '💙']],
  },
}

// (❤️ => ❤️ ❤️)(❤️ => ❤️ ❤️)
const infiniteLoopExpression = [
  {
    arg: '❤️',
    body: ['❤️', '❤️'],
  },
  {
    arg: '❤️',
    body: ['❤️', '❤️'],
  },
]

// ❤️ => (💚 => 💚 💚)(💚 => ❤️(💙 => 💚 💚 💙)))
const yCombinator = {
  arg: '❤️',
  body: [
    {
      arg: '💚',
      body: ['💚', '💚'],
    },
    {
      arg: '💚',
      body: [
        '❤️',
        {
          arg: '💙',
          body: ['💚', '💚', '💙'],
        },
      ],
    },
  ],
}

// ❤️ => 💙 => (❤️ 💙)
const recursiveFunction = {
  arg: '❤️',
  body: {
    arg: '💙',
    body: ['❤️', '💙'],
  },
}

const infiniteLoop = [yCombinator, recursiveFunction]

const functionTestCases: ExpressionTypes.UndecoratedExpression[] = [
  basicExpression,
  notTrueExpression,
  notFalseExpression,
  zeroExpression,
  oneExpression,
  twoExpression,
  infiniteLoopExpression,
  yCombinator,
  infiniteLoop,
]

export default functionTestCases
