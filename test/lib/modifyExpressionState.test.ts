import DecoratedExpressionState from 'src/constants/DecoratedExpressionState'
import decorateExpression from 'src/lib/decorateExpression'
import modifyExpressionState from 'src/lib/modifyExpressionState'

describe('modifyExpressionState', () => {
  it('', () => {
    const originalExpression = decorateExpression([
      {
        arg: 'x',
        body: 'y',
      },
      'x',
    ])
    expect(modifyExpressionState(originalExpression).state).toEqual(
      DecoratedExpressionState.CALL_ACTIVATED
    )
  })
})
