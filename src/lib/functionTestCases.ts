// (❤️ => ❤️)(💙)
const basicExpression = [
  {
    arg: '❤️',
    body: '❤️'
  },
  '💙'
]

// (❤️ => 💙 => ❤️)
const trueExpression = {
  arg: '❤️',
  body: {
    arg: '💙',
    body: '❤️'
  }
}

// (❤️ => 💙 => 💙)
const falseExpression = {
  arg: '❤️',
  body: {
    arg: '💙',
    body: '💙'
  }
}

// (💚 => ❤️ => 💙 => 💚 💙 ❤️)
const notExpression = {
  arg: '💚',
  body: {
    arg: '❤️',
    body: {
      arg: '💙',
      body: ['💚', '💙', '❤️']
    }
  }
}

const notTrueExpression = [notExpression, trueExpression]

const notFalseExpression = [notExpression, falseExpression]

const zeroExpression = {
  arg: '❤️',
  body: {
    arg: '💙',
    body: '💙'
  }
}

const oneExpression = {
  arg: '❤️',
  body: {
    arg: '💙',
    body: ['❤️', '💙']
  }
}

const twoExpression = {
  arg: '❤️',
  body: {
    arg: '💙',
    body: ['❤️', ['❤️', '💙']]
  }
}

const functionTestCases: ExpressionTypes.AnyExpression[] = [
  basicExpression,
  notTrueExpression,
  notFalseExpression,
  zeroExpression,
  oneExpression,
  twoExpression
]

export default functionTestCases
