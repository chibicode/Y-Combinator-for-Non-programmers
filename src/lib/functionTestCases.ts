const functionTestCases: ExpressionTypes.CallExpression[] = [
  // Most basic case
  // (❤️ => ❤️)(💙)
  {
    type: 'call',
    arg: {
      type: 'variable',
      name: '💙'
    },
    func: {
      type: 'function',
      arg: {
        type: 'variable',
        name: '❤️'
      },
      body: {
        type: 'variable',
        name: '❤️'
      }
    }
  },
  // True in lambda calculus
  // (❤️ => 💙 => ❤️)(❤️)(💙)
  {
    type: 'call',
    arg: {
      type: 'variable',
      name: '💙'
    },
    func: {
      type: 'call',
      arg: {
        type: 'variable',
        name: '❤️'
      },
      func: {
        type: 'function',
        arg: {
          type: 'variable',
          name: '❤️'
        },
        body: {
          type: 'function',
          arg: {
            type: 'variable',
            name: '💙'
          },
          body: {
            type: 'variable',
            name: '❤️'
          }
        }
      }
    }
  }
]

export default functionTestCases
