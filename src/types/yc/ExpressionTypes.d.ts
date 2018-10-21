import { VariableNames } from 'src/types/yc/VariableNames'

export type CommonStates =
  | 'default'
  | 'justBetaReduced'
  | 'partiallyHighlighted'
  | HighlightedStates

export type HighlightedStates =
  | 'highlighted'
  | 'justHighlighted'
  | 'justBetaReduced'
  | 'boundJustHighlighted'
  | 'boundHighlighted'
  | 'unboundJustHighlighted'
  | 'unboundHighlighted'

export interface VariableExpression {
  readonly state: CommonStates
  readonly type: 'variable'
  readonly name: VariableNames
  readonly bound?: boolean
  readonly justAlphaConverted?: boolean
  readonly willBeBetaReduced?: boolean
  readonly wasJustBetaReduced?: boolean
}

export type CallExpressionStates =
  | CommonStates
  | 'readyToHighlight'
  | 'needsAlphaConvert'
  | 'readyToBetaReduce'
  | 'betaReducePreviewBefore'
  | 'betaReducePreviewAfter'
  | 'betaReducePreviewCrossed'
  | 'alphaConvertDone'

export type AllExpressionStates = CallExpressionStates

export interface CallExpression {
  readonly state: CallExpressionStates
  readonly type: 'call'
  readonly arg: Expression
  readonly func: Expression
}

export interface FunctionExpression {
  readonly type: 'function'
  readonly state: CommonStates
  readonly arg: VariableExpression
  readonly body: Expression
  readonly wasJustBetaReduced?: boolean
}

export type Expression =
  | VariableExpression
  | CallExpression
  | FunctionExpression

export interface PrioritizedVariableExpression extends VariableExpression {
  argPriorityAgg: number[]
  funcPriorityAgg: number[]
}

export interface PrioritizedCallExpression extends CallExpression {
  priority: number
  arg: PrioritizedExpression
  func: PrioritizedExpression
}

export interface PrioritizedFunctionExpression extends FunctionExpression {
  arg: PrioritizedVariableExpression
  body: PrioritizedExpression
}

export type PrioritizedExpression =
  | PrioritizedVariableExpression
  | PrioritizedCallExpression
  | PrioritizedFunctionExpression

interface DefaultState {
  readonly state: 'default'
}

export interface DefaultStateVariableExpression extends VariableExpression {
  readonly state: DefaultState['state']
}

export interface DefaultStateFunctionExpression extends FunctionExpression {
  readonly state: DefaultState['state']
  readonly arg: DefaultStateVariableExpression
  readonly body: DefaultStateExpression
}

export interface DefaultStateCallExpression extends CallExpression {
  readonly state: DefaultState['state']
  readonly arg: DefaultStateExpression
  readonly func: DefaultStateExpression
}

export type DefaultStateExpression =
  | DefaultStateVariableExpression
  | DefaultStateFunctionExpression
  | DefaultStateCallExpression

export interface TopPriorityCallExpression extends PrioritizedCallExpression {
  readonly priority: 1
}

export interface ImmediatelyExecutableCallExpression
  extends TopPriorityCallExpression {
  readonly arg: PrioritizedVariableExpression | PrioritizedFunctionExpression
  readonly func: PrioritizedFunctionExpression
}
