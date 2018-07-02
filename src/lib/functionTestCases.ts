const functionTestCases: ExpressionTypes.CallExpression[] = [
  // (x => x + 1)(2)
  {
    type: 'call',
    args: [
      {
        type: 'number',
        value: 2
      }
    ],
    func: {
      type: 'function',
      args: ['x'],
      body: {
        type: 'sum',
        left: {
          type: 'variable',
          name: 'x'
        },
        right: {
          type: 'number',
          value: 1
        }
      }
    }
  },
  // (x, y => x + y)(5, 6)
  {
    type: 'call',
    args: [
      {
        type: 'number',
        value: 5
      },
      {
        type: 'number',
        value: 6
      }
    ],
    func: {
      type: 'function',
      args: ['x', 'y'],
      body: {
        type: 'sum',
        left: {
          type: 'variable',
          name: 'x'
        },
        right: {
          type: 'variable',
          name: 'y'
        }
      }
    }
  },
  // ((a => b => a + b)(3))(4)
  {
    type: 'call',
    args: [
      {
        type: 'number',
        value: 4
      }
    ],
    func: {
      type: 'call',
      args: [
        {
          type: 'number',
          value: 3
        }
      ],
      func: {
        type: 'function',
        args: ['a'],
        body: {
          type: 'function',
          args: ['b'],
          body: {
            type: 'sum',
            left: {
              type: 'variable',
              name: 'a'
            },
            right: {
              type: 'variable',
              name: 'b'
            }
          }
        }
      }
    }
  }
]

export default functionTestCases
