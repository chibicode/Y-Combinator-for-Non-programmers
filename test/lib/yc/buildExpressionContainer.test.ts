import buildExpressionContainer from 'src/lib/yc/buildExpressionContainer'

describe('buildExpressionContainer', () => {
  it('works with variable expressions', () => {
    expect(buildExpressionContainer('x')).toEqual({
      containerState: 'needsPrioritize',
      expression: {
        name: 'x',
        state: 'default',
        type: 'variable'
      }
    })
  })

  it('works with function expressions', () => {
    expect(
      buildExpressionContainer({
        arg: 'x',
        body: 'y'
      })
    ).toEqual({
      containerState: 'needsPrioritize',
      expression: {
        arg: {
          name: 'x',
          state: 'default',
          type: 'variable'
        },
        body: {
          name: 'y',
          state: 'default',
          type: 'variable'
        },
        state: 'default',
        type: 'function'
      }
    })
  })

  it('works with call expressions', () => {
    expect(
      buildExpressionContainer([
        {
          arg: 'x',
          body: 'y'
        },
        'z'
      ])
    ).toEqual({
      containerState: 'needsPrioritize',
      expression: {
        func: {
          arg: {
            name: 'x',
            type: 'variable',
            state: 'default'
          },
          body: {
            name: 'y',
            type: 'variable',
            state: 'default'
          },
          state: 'default',
          type: 'function'
        },
        arg: {
          name: 'z',
          state: 'default',
          type: 'variable'
        },
        state: 'default',
        type: 'call'
      }
    })
  })

  it('correctly nests call expressions', () => {
    expect(buildExpressionContainer(['a', ['b', 'c'], 'd'])).toEqual({
      containerState: 'needsPrioritize',
      expression: {
        state: 'default',
        type: 'call',
        arg: { state: 'default', type: 'variable', name: 'd' },
        func: {
          state: 'default',
          type: 'call',
          arg: {
            state: 'default',
            type: 'call',
            arg: { state: 'default', type: 'variable', name: 'c' },
            func: { state: 'default', type: 'variable', name: 'b' }
          },
          func: { state: 'default', type: 'variable', name: 'a' }
        }
      }
    })
  })
})
