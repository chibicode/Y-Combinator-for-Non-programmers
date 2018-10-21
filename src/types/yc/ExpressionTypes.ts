import { VariableNames } from 'src/types/yc/VariableNames'

export interface VariableExpression {
  readonly type: 'variable'
  readonly name: VariableNames
  readonly bound: boolean
  readonly uiState: VariableUiStates
}

interface VariableInactiveState {
  highlightType: 'inactive'
}

interface VariableActiveState {
  highlightType: 'active'
}

interface VariableEmphasizePriorityOneState {
  highlightType: 'activeEmphasizePriorityOne'
}

interface VariableHighlightFuncBoundState {
  highlightType: 'highlighted'
  badgeType: 'funcBound'
}

interface VariableActiveFuncBoundState {
  highlightType: 'active'
  badgeType: 'funcBound'
}

interface VariableHighlightFuncArgState {
  highlightType: 'highlighted'
  badgeType: 'funcArg'
}

interface VariableActiveFuncArgState {
  highlightType: 'active'
  badgeType: 'funcArg'
}

interface VariableHighlightFuncUnboundState {
  highlightType: 'unboundHighlighted'
  badgeType: 'funcUnbound'
}

interface VariableActiveFuncUnboundState {
  highlightType: 'active'
  badgeType: 'funcUnbound'
}

interface VariableHighlightCallArgState {
  highlightType: 'highlighted'
  badgeType: 'callArg'
}

export type VariableUiStates =
  | VariableInactiveState
  | VariableActiveState
  | VariableEmphasizePriorityOneState
  | VariableHighlightFuncBoundState
  | VariableActiveFuncBoundState
  | VariableHighlightFuncArgState
  | VariableActiveFuncArgState
  | VariableHighlightFuncUnboundState
  | VariableActiveFuncUnboundState
  | VariableHighlightCallArgState
  | {
      highlightType: 'active'
      badgeType: 'funcBound' | 'funcArg' | 'callArg'
    }
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

export interface TopPriorityCallExpression extends PrioritizedCallExpression {
  readonly priority: 1
}

export interface ImmediatelyExecutableCallExpression
  extends TopPriorityCallExpression {
  readonly arg: PrioritizedVariableExpression | PrioritizedFunctionExpression
  readonly func: PrioritizedFunctionExpression
}

type WithUiState<S extends VariableUiStates> = VariableExpression & {
  readonly uiState: S
}

type FunctionExpressionWithArgBody<
  A extends VariableExpression,
  B extends Expression
> = FunctionExpression & {
  readonly arg: A
  readonly body: B
}

type WithState<
  S extends CallExpressionStates,
  E extends Expression
> = CallExpression & {
  readonly arg: E
  readonly state: S
  readonly func: E
}

export type ActiveVariableExpression = WithUiState<
  VariableEmphasizePriorityOneState
>
export interface ActiveFunctionExpression
  extends FunctionExpressionWithArgBody<
      ActiveVariableExpression,
      ActiveExpression
    > {}
export interface ActiveCallExpression
  extends WithState<'active', ActiveExpression> {}
export type ActiveExpression =
  | ActiveVariableExpression
  | ActiveFunctionExpression
  | ActiveCallExpression

export type ShowFuncBoundVariableExpression =
  | WithUiState<VariableHighlightFuncBoundState>
  | WithUiState<VariableActiveState>
export interface ShowFuncBoundFunctionExpression
  extends FunctionExpressionWithArgBody<
      ShowFuncBoundVariableExpression,
      ShowFuncBoundExpression
    > {}
export interface ShowFuncBoundCallExpression
  extends WithState<'showFuncBound', ShowFuncBoundExpression> {}
export type ShowFuncBoundExpression =
  | ShowFuncBoundVariableExpression
  | ShowFuncBoundFunctionExpression
  | ShowFuncBoundCallExpression

export type ShowFuncArgVariableExpression =
  | WithUiState<VariableActiveState>
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableHighlightFuncArgState>
export interface ShowFuncArgFunctionExpression
  extends FunctionExpressionWithArgBody<
      ShowFuncArgVariableExpression,
      ShowFuncArgExpression
    > {}
export interface ShowFuncArgCallExpression
  extends WithState<'showFuncArg', ShowFuncArgExpression> {}
export type ShowFuncArgExpression =
  | ShowFuncArgVariableExpression
  | ShowFuncArgFunctionExpression
  | ShowFuncArgCallExpression

export type ShowFuncUnboundVariableExpression =
  | WithUiState<VariableActiveState>
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableActiveFuncArgState>
  | WithUiState<VariableHighlightFuncUnboundState>
export interface ShowFuncUnboundFunctionExpression
  extends FunctionExpressionWithArgBody<
      ShowFuncUnboundVariableExpression,
      ShowFuncUnboundExpression
    > {}
export interface ShowFuncUnboundCallExpression
  extends WithState<'showFuncUnbound', ShowFuncUnboundExpression> {}
export type ShowFuncUnboundExpression =
  | ShowFuncUnboundVariableExpression
  | ShowFuncUnboundFunctionExpression
  | ShowFuncUnboundCallExpression

export type ShowCallArgVariableExpression =
  | WithUiState<VariableActiveState>
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableActiveFuncArgState>
  | WithUiState<VariableActiveFuncUnboundState>
  | WithUiState<VariableHighlightCallArgState>
export interface ShowCallArgFunctionExpression
  extends FunctionExpressionWithArgBody<
      ShowCallArgVariableExpression,
      ShowCallArgExpression
    > {}
export interface ShowCallArgCallExpression
  extends WithState<'showCallArg', ShowCallArgExpression> {}
export type ShowCallArgExpression =
  | ShowCallArgVariableExpression
  | ShowCallArgFunctionExpression
  | ShowCallArgCallExpression
