const functionTestCases: ExpressionTypes.CallExpression[] = [
  {
    type: 'call',
    arg: {
      type: 'variable',
      name: '🤔'
    },
    func: {
      type: 'function',
      arg: {
        type: 'variable',
        name: '😆'
      },
      body: {
        type: 'variable',
        name: '😆'
      }
    }
  }
]

export default functionTestCases
