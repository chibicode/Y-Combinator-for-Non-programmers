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

export function isHighlightedState(
  state: CommonStates
): state is HighlightedStates {
  const t: Partial<Record<CommonStates, boolean>> = {
    highlighted: true,
    justHighlighted: true,
    justBetaReduced: true,
    boundJustHighlighted: true,
    boundHighlighted: true,
    unboundJustHighlighted: true,
    unboundHighlighted: true
  }
  return !!t[state]
}

export interface VariableExpression {
  readonly state: CommonStates
  readonly type: 'variable'
  readonly name: VariableNames
  readonly bound?: boolean
  readonly justAlphaConverted?: boolean
  readonly willBeBetaReduced?: boolean
  readonly wasJustBetaReduced?: boolean
}

export function isVariableExpression(
  expression: Expression
): expression is VariableExpression {
  return expression.type === 'variable'
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

export function isCallExpression(
  expression: Expression
): expression is CallExpression {
  return expression.type === 'call'
}

export interface FunctionExpression {
  readonly type: 'function'
  readonly state: CommonStates
  readonly arg: VariableExpression
  readonly body: Expression
  readonly wasJustBetaReduced?: boolean
}

export function isFunctionExpression(
  expression: Expression
): expression is FunctionExpression {
  return expression.type === 'function'
}

export type Expression =
  | VariableExpression
  | CallExpression
  | FunctionExpression
