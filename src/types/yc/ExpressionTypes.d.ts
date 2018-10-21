import { VariableNames } from 'src/types/yc/VariableNames'

export interface VariableExpression {
  readonly type: 'variable'
  readonly name: VariableNames
  readonly bound: boolean
  readonly uiState: VariableUiStates
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

export interface CallExpression {
  readonly state: CallExpressionStates
  readonly type: 'call'
  readonly arg: Expression
  readonly func: Expression
}

export interface FunctionExpression {
  readonly type: 'function'
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

export type DefaultStateVariableExpression = VariableExpression & {
  readonly uiState: VariableDefaultUiState
}

export type DefaultStateFunctionExpression = FunctionExpression & {
  readonly arg: DefaultStateVariableExpression
  readonly body: DefaultStateExpression
}

export type DefaultStateCallExpression = CallExpression & {
  readonly arg: DefaultStateExpression
  readonly state: 'inactive'
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

type VariableDefaultUiState = {
  highlightType: 'inactive'
}

export type VariableUiStates =
  | VariableDefaultUiState
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
