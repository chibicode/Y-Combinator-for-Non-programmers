import { UndecoratedFunctionExpression } from 'src/types/UndecoratedExpressionTypes'

export interface DecoratedVariableExpression {
  state: 'default' | 'highlighted'
  type: 'variable'
  value: string
}

export interface DecoratedCallExpression {
  state:
    | 'default'
    | 'readyToHighlight'
    | 'highlighted'
    | 'done'
    | 'readyToAlphaConvert'
  type: 'call'
  priority?: number
  value: {
    arg: DecoratedExpression
    func: DecoratedExpression
  }
}

export interface DecoratedCallUnprioritizedExpression
  extends DecoratedCallExpression {
  priority: undefined
}

export interface DecoratedCallPrioritizedExpression
  extends DecoratedCallExpression {
  priority: number
}

export interface DecoratedCallExecutableExpression
  extends DecoratedCallExpression {
  priority: 1
  value: {
    arg: DecoratedVariableExpression | DecoratedFunctionExpression
    func: DecoratedFunctionExpression
  }
}

export interface DecoratedCallUnexecutableExpression
  extends DecoratedCallExpression {
  state: 'done'
}

export interface DecoratedFunctionExpression {
  type: 'function'
  state: 'default' | 'highlighted'
  value: {
    arg: DecoratedExpression
    body: DecoratedExpression
  }
}

export type DecoratedExpression =
  | DecoratedVariableExpression
  | DecoratedCallExpression
  | DecoratedFunctionExpression
