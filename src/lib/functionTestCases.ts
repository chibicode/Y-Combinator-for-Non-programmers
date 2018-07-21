// (❤️ => ❤️)(💙)
const basicExpression = {
  arg: '💙',
  func: {
    arg: '❤️',
    body: '❤️'
  }
}

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

const notExpression = {
  arg: '💚',
  body: {
    arg: '❤️',
    body: {
      arg: '💙',
      body: {
        arg: '❤️',
        func: {
          arg: '💙',
          func: '💚'
        }
      }
    }
  }
}

const notTrueExpression = {
  arg: trueExpression,
  func: notExpression
}

const notFalseExpression = {
  arg: falseExpression,
  func: notExpression
}

const functionTestCases: ExpressionTypes.AnyExpression[] = [
  basicExpression,
  notTrueExpression,
  notFalseExpression
]

export default functionTestCases
