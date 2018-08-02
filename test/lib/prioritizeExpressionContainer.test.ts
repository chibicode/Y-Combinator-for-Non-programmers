import buildExpressionContainer from 'src/lib/buildExpressionContainer'
import expressionContainerToSimpleString from 'src/lib/expressionContainerToSimpleString'
import prioritizeExpressionContainer from 'src/lib/prioritizeExpressionContainer'

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
    ).toEqual('(x => y)(1z)')
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
    ).toEqual('(x => (y => (z => x(2y(1z)))))(1(a => a))(2(b => b))(3c)')
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
    ).toEqual('(a => (b => c))(2d)(3(e => (f => g))(1h))')
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
      ).toEqual('[1,2,3a]([b1])([c2])([d3])')
    })

    it('aggregates priorities correctly (case 2)', () => {
      expect(
        expressionContainerToSimpleString(
          prioritizeExpressionContainer(
            buildExpressionContainer([['a', 'b'], ['c', 'd']])
          ),
          { addPriorityAgg: true }
        )
      ).toEqual('[2,3a]([b2])([1c]([d1,3]))')
    })

    it('aggregates priorities correctly (case 3)', () => {
      expect(
        expressionContainerToSimpleString(
          prioritizeExpressionContainer(
            buildExpressionContainer([['a', ['b', 'c']], 'd'])
          ),
          { addPriorityAgg: true }
        )
      ).toEqual('[2,3a]([1b]([c1,2]))([d3])')
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
      ).toEqual('([1,2,3x] => [1,2a]([b1])([c2]))([b1])([c2])([d3])')
    })
  })
})
