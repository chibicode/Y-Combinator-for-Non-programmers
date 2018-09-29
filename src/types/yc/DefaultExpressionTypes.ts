import {
  CallExpression,
  FunctionExpression,
  VariableExpression
} from 'src/types/yc/ExpressionTypes'

export interface DefaultStateVariableExpression extends VariableExpression {
  readonly state: 'default'
}

export interface DefaultStateFunctionExpression extends FunctionExpression {
  readonly state: 'default'
  readonly arg: DefaultStateVariableExpression
  readonly body: DefaultStateExpression
}

export interface DefaultStateCallExpression extends CallExpression {
  readonly state: 'default'
  readonly arg: DefaultStateExpression
  readonly func: DefaultStateExpression
}

export type DefaultStateExpression =
  | DefaultStateVariableExpression
  | DefaultStateFunctionExpression
  | DefaultStateCallExpression
