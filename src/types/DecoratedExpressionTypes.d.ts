import { UndecoratedFunctionExpression } from 'src/types/UndecoratedExpressionTypes'

interface DecoratedBaseExpression {
  state: 'default' | 'callActivated' | 'highlighted'
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

export interface DecoratedCallExecutableExpression
  extends DecoratedBaseExpression {
  type: 'call'
  value: {
    arg: DecoratedExpression
    func: DecoratedFunctionExpression
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
