import decorateExpression from 'src/lib/decorateExpression'

describe('decorateExpression', () => {
  it('works with variable expressions', () => {
    expect(decorateExpression('hello')).toEqual({
      value: 'hello',
      state: {},
    })
  })

  it('works with function expressions', () => {
    expect(
      decorateExpression({
        arg: 'x',
        body: 'y',
      }),
    ).toEqual({
      value: {
        arg: {
          value: 'x',
          state: {},
        },
        body: {
          value: 'y',
          state: {},
        },
      },
      state: {},
    })
  })

  it('works with call expressions', () => {
    expect(
      decorateExpression([
        {
          arg: 'x',
          body: 'y',
        },
        'x',
      ]),
    ).toEqual({
      value: [
        {
          value: {
            arg: {
              value: 'x',
              state: {},
            },
            body: {
              value: 'y',
              state: {},
            },
          },
          state: {},
        },
        { value: 'x', state: {} },
      ],
      state: {},
    })
  })
})
