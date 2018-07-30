import {
  CallExpression,
  FunctionExpression,
  VariableExpression
} from 'src/types/ExpressionTypes'

export interface DefaultStateVariableExpression extends VariableExpression {
  state: 'default'
}

export interface DefaultStateFunctionExpression extends FunctionExpression {
  state: 'default'
  arg: DefaultStateVariableExpression
  body: DefaultStateExpression
}

export interface DefaultStateCallExpression extends CallExpression {
  state: 'default'
  arg: DefaultStateExpression
  func: DefaultStateExpression
}

export type DefaultStateExpression =
  | DefaultStateVariableExpression
  | DefaultStateFunctionExpression
  | DefaultStateCallExpression
