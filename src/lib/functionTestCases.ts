const functionTestCases: ExpressionTypes.AnyExpression[] = [
  // Most basic case
  // (❤️ => ❤️)(💙)
  {
    arg: '💙',
    func: {
      arg: '❤️',
      body: '❤️'
    }
  },
  // True in lambda calculus
  // (❤️ => 💙 => ❤️)
  {
    arg: '❤️',
    body: {
      arg: '💙',
      body: '❤️'
    }
  }
]

export default functionTestCases
