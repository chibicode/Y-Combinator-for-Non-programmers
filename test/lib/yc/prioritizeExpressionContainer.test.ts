import buildExpressionContainer from 'src/lib/yc/buildExpressionContainer'
import prioritizeExpressionContainer from 'src/lib/yc/prioritizeExpressionContainer'
import expressionContainerToSimpleString from 'test/helpers/expressionContainerToSimpleString'

describe('prioritizeExpressionContainer', () => {
  it('works with simple case', () => {
    expect(
      expressionContainerToSimpleString(
        prioritizeExpressionContainer(
          buildExpressionContainer([
            {
              arg: 'x',
              body: 'y'
            },
            'z'
          ])
        ),
        { addPriority: true }
      )
    ).toBe('(x => y)(1z)')
  })

  it('works with slightly more complex case', () => {
    expect(
      expressionContainerToSimpleString(
        prioritizeExpressionContainer(
          buildExpressionContainer([
            {
              arg: 'x',
              body: {
                arg: 'y',
                body: {
                  arg: 'z',
                  body: ['x', ['y', 'z']]
                }
              }
            },
            {
              arg: 'a',
              body: 'a'
            },
            {
              arg: 'b',
              body: 'b'
            },
            'c'
          ])
        ),
        { addPriority: true }
      )
    ).toBe('(x => (y => (z => x(2y(1z)))))(1(a => a))(2(b => b))(3c)')
  })

  it('prioritizes argument over function', () => {
    expect(
      expressionContainerToSimpleString(
        prioritizeExpressionContainer(
          buildExpressionContainer([
            [
              {
                arg: 'a',
                body: {
                  arg: 'b',
                  body: 'c'
                }
              },
              'd'
            ],
            [
              {
                arg: 'e',
                body: {
                  arg: 'f',
                  body: 'g'
                }
              },
              'h'
            ]
          ])
        ),
        { addPriority: true }
      )
    ).toBe('(a => (b => c))(2d)(3(e => (f => g))(1h))')
  })

  describe('priority aggregation', () => {
    it('aggregates priorities correctly (case 1)', () => {
      expect(
        expressionContainerToSimpleString(
          prioritizeExpressionContainer(
            buildExpressionContainer([[['a', 'b'], 'c'], 'd'])
          ),
          { addPriorityAgg: true }
        )
      ).toBe('[1,2,3a]([b1])([c2])([d3])')
    })

    it('aggregates priorities correctly (case 2)', () => {
      expect(
        expressionContainerToSimpleString(
          prioritizeExpressionContainer(
            buildExpressionContainer([['a', 'b'], ['c', 'd']])
          ),
          { addPriorityAgg: true }
        )
      ).toBe('[2,3a]([b2])([1c]([d1,3]))')
    })

    it('aggregates priorities correctly (case 3)', () => {
      expect(
        expressionContainerToSimpleString(
          prioritizeExpressionContainer(
            buildExpressionContainer([['a', ['b', 'c']], 'd'])
          ),
          { addPriorityAgg: true }
        )
      ).toBe('[2,3a]([1b]([c1,2]))([d3])')
    })

    it('aggregates priorities correctly (has function)', () => {
      expect(
        expressionContainerToSimpleString(
          prioritizeExpressionContainer(
            buildExpressionContainer([
              [
                [
                  {
                    arg: 'x',
                    body: ['a', 'b', 'c']
                  },
                  'b'
                ],
                'c'
              ],
              'd'
            ])
          ),
          { addPriorityAgg: true }
        )
      ).toBe('([1,2,3x] => [1,2a]([b1])([c2]))([b1])([c2])([d3])')
    })
  })
})
