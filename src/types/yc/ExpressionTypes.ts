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

interface VariableHighlightCallArgState {
  highlightType: 'highlighted'
  badgeType: 'callArg'
}

interface VariableActiveCallArgState {
  highlightType: 'highlighted'
  badgeType: 'callArg'
}

interface VariableConflictFuncUnboundState {
  highlightType: 'conflict'
  badgeType: 'funcUnbound'
}

interface VariableConflictCallArgState {
  highlightType: 'conflict'
  badgeType: 'callArg'
}

interface VariableConflictResolvedFuncUnboundState {
  highlightType: 'conflictResolved'
  badgeType: 'funcUnbound'
}

interface VariableConflictResolvedFuncBoundState {
  highlightType: 'conflictResolved'
  badgeType: 'funcBound'
}

interface VariableMatchFuncBoundState {
  highlightType: 'match'
  badgeType: 'funcBound'
}

interface VariableBetaReducedState {
  highlightType: 'match'
  badgeType: 'betaReduced'
}

interface VariableRemovedFuncArgState {
  highlightType: 'removed'
  badgeType: 'funcArg'
}

interface VariableRemovedCallArgState {
  highlightType: 'removed'
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
  | VariableHighlightCallArgState
  | VariableActiveCallArgState
  | VariableConflictFuncUnboundState
  | VariableConflictCallArgState
  | VariableConflictResolvedFuncUnboundState
  | VariableConflictResolvedFuncBoundState
  | VariableMatchFuncBoundState
  | VariableBetaReducedState
  | VariableRemovedFuncArgState
  | VariableRemovedCallArgState

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

type CallExpressionWithState<
  S extends CallExpressionStates
> = S extends 'inactive'
  ? InactiveCallExpression
  : S extends 'active'
    ? ActiveCallExpression
    : S extends 'showFuncBound'
      ? ShowFuncBoundCallExpression
      : S extends 'showFuncArg'
        ? ShowFuncArgCallExpression
        : S extends 'showFuncUnbound'
          ? ShowFuncUnboundCallExpression
          : S extends 'showCallArg'
            ? ShowCallArgCallExpression
            : S extends 'needsAlphaConvert'
              ? NeedsAlphaConvertCallExpression
              : S extends 'alphaConvertDone'
                ? AlphaConvertDoneCallExpression
                : S extends 'betaReducePreviewBefore'
                  ? BetaReducePreviewBeforeCallExpression
                  : S extends 'betaReducePreviewAfter'
                    ? BetaReducePreviewAfterCallExpression
                    : S extends 'betaReducePreviewCrossed'
                      ? BetaReducePreviewCrossedCallExpression
                      : never

export type InactiveVariableExpression = WithUiState<VariableInactiveState>
export interface InactiveFunctionExpression
  extends FunctionExpressionWithArgBody<
      InactiveVariableExpression,
      InactiveExpression
    > {}
export interface InactiveCallExpression
  extends WithState<'inactive', InactiveExpression> {}
export type InactiveExpression =
  | InactiveVariableExpression
  | InactiveFunctionExpression
  | InactiveCallExpression

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
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableActiveFuncArgState>
  | WithUiState<VariableHighlightFuncUnboundState>
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

export type NeedsAlphaConvertVariableExpression =
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableActiveFuncArgState>
  | WithUiState<VariableHighlightFuncUnboundState>
  | WithUiState<VariableActiveCallArgState>
  | WithUiState<VariableConflictFuncUnboundState>
  | WithUiState<VariableConflictCallArgState>
export interface NeedsAlphaConvertFunctionExpression
  extends FunctionExpressionWithArgBody<
      NeedsAlphaConvertVariableExpression,
      NeedsAlphaConvertExpression
    > {}
export interface NeedsAlphaConvertCallExpression
  extends WithState<'needsAlphaConvert', NeedsAlphaConvertExpression> {}
export type NeedsAlphaConvertExpression =
  | NeedsAlphaConvertVariableExpression
  | NeedsAlphaConvertFunctionExpression
  | NeedsAlphaConvertCallExpression

export type AlphaConvertDoneVariableExpression =
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableActiveFuncArgState>
  | WithUiState<VariableHighlightFuncUnboundState>
  | WithUiState<VariableActiveCallArgState>
  | WithUiState<VariableConflictResolvedFuncUnboundState>
  | WithUiState<VariableConflictResolvedFuncBoundState>
export interface AlphaConvertDoneFunctionExpression
  extends FunctionExpressionWithArgBody<
      AlphaConvertDoneVariableExpression,
      AlphaConvertDoneExpression
    > {}
export interface AlphaConvertDoneCallExpression
  extends WithState<'alphaConvertDone', AlphaConvertDoneExpression> {}
export type AlphaConvertDoneExpression =
  | AlphaConvertDoneVariableExpression
  | AlphaConvertDoneFunctionExpression
  | AlphaConvertDoneCallExpression

export type BetaReducePreviewBeforeVariableExpression =
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableHighlightFuncArgState>
  | WithUiState<VariableHighlightFuncUnboundState>
  | WithUiState<VariableActiveCallArgState>
  | WithUiState<VariableMatchFuncBoundState>
export interface BetaReducePreviewBeforeFunctionExpression
  extends FunctionExpressionWithArgBody<
      BetaReducePreviewBeforeVariableExpression,
      BetaReducePreviewBeforeExpression
    > {}
export interface BetaReducePreviewBeforeCallExpression
  extends WithState<
      'betaReducePreviewBefore',
      BetaReducePreviewBeforeExpression
    > {}
export type BetaReducePreviewBeforeExpression =
  | BetaReducePreviewBeforeVariableExpression
  | BetaReducePreviewBeforeFunctionExpression
  | BetaReducePreviewBeforeCallExpression

export type BetaReducePreviewAfterVariableExpression =
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableActiveFuncArgState>
  | WithUiState<VariableHighlightFuncUnboundState>
  | WithUiState<VariableHighlightCallArgState>
  | WithUiState<VariableMatchFuncBoundState>
export interface BetaReducePreviewAfterFunctionExpression
  extends FunctionExpressionWithArgBody<
      BetaReducePreviewAfterVariableExpression,
      BetaReducePreviewAfterExpression
    > {}
export interface BetaReducePreviewAfterCallExpression
  extends WithState<
      'betaReducePreviewAfter',
      BetaReducePreviewAfterExpression
    > {}
export type BetaReducePreviewAfterExpression =
  | BetaReducePreviewAfterVariableExpression
  | BetaReducePreviewAfterFunctionExpression
  | BetaReducePreviewAfterCallExpression

export type BetaReducePreviewCrossedVariableExpression =
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableRemovedFuncArgState>
  | WithUiState<VariableHighlightFuncUnboundState>
  | WithUiState<VariableRemovedCallArgState>
  | WithUiState<VariableActiveFuncBoundState>
export interface BetaReducePreviewCrossedFunctionExpression
  extends FunctionExpressionWithArgBody<
      BetaReducePreviewCrossedVariableExpression,
      BetaReducePreviewCrossedExpression
    > {}
export interface BetaReducePreviewCrossedCallExpression
  extends WithState<
      'betaReducePreviewCrossed',
      BetaReducePreviewCrossedExpression
    > {}
export type BetaReducePreviewCrossedExpression =
  | BetaReducePreviewCrossedVariableExpression
  | BetaReducePreviewCrossedFunctionExpression
  | BetaReducePreviewCrossedCallExpression
