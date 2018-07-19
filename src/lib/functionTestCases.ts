const functionTestCases: ExpressionTypes.CallExpression[] = [
  // (x => x + 1)(2)
  {
    type: 'call',
    arg: {
      type: 'number',
      value: 2
    },
    func: {
      type: 'function',
      arg: 'x',
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
  // ((a => b => a + b)(3))(4)
  {
    type: 'call',
    arg: {
      type: 'number',
      value: 4
    },
    func: {
      type: 'call',
      arg: {
        type: 'number',
        value: 3
      },
      func: {
        type: 'function',
        arg: 'a',
        body: {
          type: 'function',
          arg: 'b',
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
  },
  // (f => g => x => f(g(x)))(a => a + 1)(b => b + 2)(3)
  {
    type: 'call',
    arg: {
      type: 'number',
      value: 3
    },
    func: {
      type: 'call',
      arg: {
        type: 'function',
        arg: 'b',
        body: {
          type: 'sum',
          left: {
            type: 'variable',
            name: 'b'
          },
          right: {
            type: 'number',
            value: 2
          }
        }
      },
      func: {
        type: 'call',
        arg: {
          type: 'function',
          arg: 'a',
          body: {
            type: 'sum',
            left: {
              type: 'variable',
              name: 'a'
            },
            right: {
              type: 'number',
              value: 1
            }
          }
        },
        func: {
          type: 'function',
          arg: 'f',
          body: {
            type: 'function',
            arg: 'g',
            body: {
              type: 'function',
              arg: 'x',
              body: {
                type: 'call',
                arg: {
                  type: 'call',
                  arg: {
                    type: 'variable',
                    name: 'x'
                  },
                  func: {
                    type: 'variable',
                    name: 'g'
                  }
                },
                func: {
                  type: 'variable',
                  name: 'f'
                }
              }
            }
          }
        }
      }
    }
  }
]

export default functionTestCases
