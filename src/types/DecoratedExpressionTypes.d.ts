import { UndecoratedFunctionExpression } from 'src/types/UndecoratedExpressionTypes'
import DecoratedExpressionState from 'src/constants/DecoratedExpressionState'

interface DecoratedBaseExpression {
  state: DecoratedExpressionState
}

export interface DecoratedVariableExpression extends DecoratedBaseExpression {
  type: 'variable'
  value: string
}

export interface DecoratedCallExpression extends DecoratedBaseExpression {
  type: 'call'
  value: {
    arg: DecoratedExpression
    func: DecoratedExpression
  }
}

export interface DecoratedFunctionExpression extends DecoratedBaseExpression {
  type: 'function'
  value: {
    arg: DecoratedExpression
    body: DecoratedExpression
  }
}

export type DecoratedExpression =
  | DecoratedVariableExpression
  | DecoratedCallExpression
  | DecoratedFunctionExpression
