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
  readonly bound: boolean
  // These might be necessary to store values between transitions
  readonly justAlphaConverted?: boolean
  readonly willBeBetaReduced?: boolean
  readonly wasJustBetaReduced?: boolean
}

export type CallExpressionStates =
  | 'inactive'
  | 'active'
  | 'showFuncBound'
  | 'showFuncArg'
  | 'showFuncUnbound'
  | 'showCallArg'
  | 'needsAlphaConvert'
  | 'alphaConvertDone'
  | 'betaReducePreviewBefore'
  | 'betaReducePreviewAfter'
  | 'betaReducePreviewCrossed'

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

export interface DefaultState {
  readonly state: 'default'
}

export type DefaultStateVariableExpression = VariableExpression & DefaultState
export type DefaultStateFunctionExpression = FunctionExpression &
  DefaultState & {
    readonly arg: DefaultStateVariableExpression
    readonly body: DefaultStateExpression
  }

export type DefaultStateCallExpression = CallExpression &
  DefaultState & {
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

export type VariableUiStates =
  | {
      highlightType: 'inactive'
    }
  | {
      highlightType: 'active'
    } & (
      | {
          emphasizePriorityOne: true
        }
      | {
          badgeType: 'funcBound' | 'funcArg' | 'callArg'
        })
  | {
      highlightType: 'highlighted'
    } & ({
      badgeType: 'funcBound' | 'funcArg' | 'callArg'
    })
  | {
      highlightType: 'unboundHighlighted'
    } & {
      badgeType: 'funcUnbound'
    }
  | {
      // TODO: yellow plain background
      highlightType: 'matchHighlighted'
    } & {
      badgeType: 'betaReduced'
    }
  | {
      highlightType: 'beingRemoved'
    } & {
      badgeType: 'funcArg' | 'callArg'
    }
  | {
      // TODO: pink plain background
      highlightType: 'conflict'
    } & {
      badgeType: 'funcUnbound' | 'callArg'
    }
  | {
      // TODO: yellow plain background
      highlightType: 'conflictResolved'
    } & {
      badgeType: 'funcBound' | 'funcUnbound'
    }

export type VariableUiHighlights =
  | 'inactive'
  | 'active'
  | 'highlighted'
  | 'unboundedHighlighted'
  | 'matchHighlighted'
  | 'beingRemoved'
  | 'conflict'
  | 'boundedConflictResolved'
  | 'unboundedConflictResolved'

export type VariableUiBadges =
  | 'none'
  | 'funcBounded'
  | 'funcArg'
  | 'funcUnbounded'
  | 'callArg'
  | 'betaReduced'
  | 'alphaConverted'

export interface VariableUi {
  highlightType: VariableUiHighlights
  badgeType: VariableUiBadges
}

export type VariableStates =
  | 'justAlphaConverted'
  | 'willBeBetaReduced'
  | 'wasJustBetaReduced'

// TODO: RenderableVariableExpression - can be fed into React.
