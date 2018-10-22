import { VariableNames } from 'src/types/yc/VariableNames'

export interface VariableExpression {
  readonly type: 'variable'
  readonly name: VariableNames
  readonly bound: boolean
  readonly uiState: VariableUiStates
  readonly argPriorityAgg: number[]
  readonly funcPriorityAgg: number[]
}

type WithUiState<S extends VariableUiStates> = VariableExpression & {
  readonly uiState: S
}

interface VariableInactiveState {
  highlightType: 'inactive'
  badgeType: 'none'
}

interface VariableActiveState {
  highlightType: 'active'
  badgeType: 'none'
}

interface VariableEmphasizePriorityOneState {
  highlightType: 'activeEmphasizePriorityOne'
  badgeType: 'none'
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
  readonly priority: number
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

type FunctionExpressionWithArgBody<
  A extends VariableExpression,
  B extends Expression
> = FunctionExpression & {
  readonly arg: A
  readonly body: B
}

type NonExecutable<E extends Expression> = CallExpression & {
  readonly arg: E
  readonly state: 'inactive'
  readonly func: E
}

type Executable<
  S extends CallExpressionStates,
  F extends FunctionExpression,
  V extends VariableExpression
> = CallExpression & {
  readonly arg: V | F
  readonly state: S
  readonly func: F
}

// NOTE: Unfortunately these can't be mass-generated using
// type aliases because they contain recursive types which require using interfaces.
// I tried creating a type alias like this:
// type Gen<V extends VariableExpression, CS extends CallExpressionState> = {
//   function: ...
//   nonExecutableCall: ...
//   executableCall: ...
//   child: V | Gen<V, CS>['function'] | Gen<V, CS>['nonExecutable]
// }
// but the recursive calls don't compile. We must use interfaces to get
// recursive definitions to work, but interfaces can't be created using type aliases.
export type InactiveVariableExpression = WithUiState<VariableInactiveState>
export interface InactiveFunctionExpression
  extends FunctionExpressionWithArgBody<
      InactiveVariableExpression,
      InactiveChildExpression
    > {}
export interface NonExecutableInactiveCallExpression
  extends NonExecutable<InactiveChildExpression> {}
export interface ExecutableInactiveCallExpression
  extends Executable<
      'inactive',
      InactiveFunctionExpression,
      InactiveVariableExpression
    > {}
export type InactiveCallExpression =
  | NonExecutableInactiveCallExpression
  | ExecutableInactiveCallExpression
export type InactiveChildExpression =
  | InactiveVariableExpression
  | InactiveFunctionExpression
  | NonExecutableInactiveCallExpression
export type InactiveExpression =
  | InactiveChildExpression
  | ExecutableInactiveCallExpression

export type ActiveVariableExpression = WithUiState<
  VariableEmphasizePriorityOneState
>
export interface ActiveFunctionExpression
  extends FunctionExpressionWithArgBody<
      ActiveVariableExpression,
      ActiveChildExpression
    > {}
export interface ExecutableActiveCallExpression
  extends Executable<
      'active',
      ActiveFunctionExpression,
      ActiveVariableExpression
    > {}
export interface NonExecutableActiveCallExpression
  extends NonExecutable<ActiveChildExpression> {}
export type ActiveChildExpression =
  | ActiveVariableExpression
  | ActiveFunctionExpression
  | NonExecutableActiveCallExpression

export type ShowFuncBoundVariableExpression =
  | WithUiState<VariableHighlightFuncBoundState>
  | WithUiState<VariableActiveState>
export interface ShowFuncBoundFunctionExpression
  extends FunctionExpressionWithArgBody<
      ShowFuncBoundVariableExpression,
      ShowFuncBoundChildExpression
    > {}
export interface ExecutableShowFuncBoundCallExpression
  extends Executable<
      'active',
      ShowFuncBoundFunctionExpression,
      ShowFuncBoundVariableExpression
    > {}
export interface NonExecutableShowFuncBoundCallExpression
  extends NonExecutable<ShowFuncBoundChildExpression> {}
export type ShowFuncBoundChildExpression =
  | ShowFuncBoundVariableExpression
  | ShowFuncBoundFunctionExpression
  | NonExecutableShowFuncBoundCallExpression

export type ShowFuncArgVariableExpression =
  | WithUiState<VariableActiveState>
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableHighlightFuncArgState>
export interface ShowFuncArgFunctionExpression
  extends FunctionExpressionWithArgBody<
      ShowFuncArgVariableExpression,
      ShowFuncArgChildExpression
    > {}
export interface ExecutableShowFuncArgCallExpression
  extends Executable<
      'active',
      ShowFuncArgFunctionExpression,
      ShowFuncArgVariableExpression
    > {}
export interface NonExecutableShowFuncArgCallExpression
  extends NonExecutable<ShowFuncArgChildExpression> {}
export type ShowFuncArgChildExpression =
  | ShowFuncArgVariableExpression
  | ShowFuncArgFunctionExpression
  | NonExecutableShowFuncArgCallExpression

export type ShowFuncUnboundVariableExpression =
  | WithUiState<VariableActiveState>
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableActiveFuncArgState>
  | WithUiState<VariableHighlightFuncUnboundState>
export interface ShowFuncUnboundFunctionExpression
  extends FunctionExpressionWithArgBody<
      ShowFuncUnboundVariableExpression,
      ShowFuncUnboundChildExpression
    > {}
export interface ExecutableShowFuncUnboundCallExpression
  extends Executable<
      'active',
      ShowFuncUnboundFunctionExpression,
      ShowFuncUnboundVariableExpression
    > {}
export interface NonExecutableShowFuncUnboundCallExpression
  extends NonExecutable<ShowFuncUnboundChildExpression> {}
export type ShowFuncUnboundChildExpression =
  | ShowFuncUnboundVariableExpression
  | ShowFuncUnboundFunctionExpression
  | NonExecutableShowFuncUnboundCallExpression

export type ShowCallArgVariableExpression =
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableActiveFuncArgState>
  | WithUiState<VariableHighlightFuncUnboundState>
  | WithUiState<VariableHighlightCallArgState>
export interface ShowCallArgFunctionExpression
  extends FunctionExpressionWithArgBody<
      ShowCallArgVariableExpression,
      ShowCallArgChildExpression
    > {}
export interface ExecutableShowCallArgCallExpression
  extends Executable<
      'active',
      ShowCallArgFunctionExpression,
      ShowCallArgVariableExpression
    > {}
export interface NonExecutableShowCallArgCallExpression
  extends NonExecutable<ShowCallArgChildExpression> {}
export type ShowCallArgChildExpression =
  | ShowCallArgVariableExpression
  | ShowCallArgFunctionExpression
  | NonExecutableShowCallArgCallExpression

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
      NeedsAlphaConvertChildExpression
    > {}
export interface ExecutableNeedsAlphaConvertCallExpression
  extends Executable<
      'active',
      NeedsAlphaConvertFunctionExpression,
      NeedsAlphaConvertVariableExpression
    > {}
export interface NonExecutableNeedsAlphaConvertCallExpression
  extends NonExecutable<NeedsAlphaConvertChildExpression> {}
export type NeedsAlphaConvertChildExpression =
  | NeedsAlphaConvertVariableExpression
  | NeedsAlphaConvertFunctionExpression
  | NonExecutableNeedsAlphaConvertCallExpression

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
      AlphaConvertDoneChildExpression
    > {}
export interface ExecutableAlphaConvertDoneCallExpression
  extends Executable<
      'active',
      AlphaConvertDoneFunctionExpression,
      AlphaConvertDoneVariableExpression
    > {}
export interface NonExecutableAlphaConvertDoneCallExpression
  extends NonExecutable<AlphaConvertDoneChildExpression> {}
export type AlphaConvertDoneChildExpression =
  | AlphaConvertDoneVariableExpression
  | AlphaConvertDoneFunctionExpression
  | NonExecutableAlphaConvertDoneCallExpression

export type BetaReducePreviewBeforeVariableExpression =
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableHighlightFuncArgState>
  | WithUiState<VariableHighlightFuncUnboundState>
  | WithUiState<VariableActiveCallArgState>
  | WithUiState<VariableMatchFuncBoundState>
export interface BetaReducePreviewBeforeFunctionExpression
  extends FunctionExpressionWithArgBody<
      BetaReducePreviewBeforeVariableExpression,
      BetaReducePreviewBeforeChildExpression
    > {}
export interface ExecutableBetaReducePreviewBeforeCallExpression
  extends Executable<
      'active',
      BetaReducePreviewBeforeFunctionExpression,
      BetaReducePreviewBeforeVariableExpression
    > {}
export interface NonExecutableBetaReducePreviewBeforeCallExpression
  extends NonExecutable<BetaReducePreviewBeforeChildExpression> {}
export type BetaReducePreviewBeforeChildExpression =
  | BetaReducePreviewBeforeVariableExpression
  | BetaReducePreviewBeforeFunctionExpression
  | NonExecutableBetaReducePreviewBeforeCallExpression

export type BetaReducePreviewAfterVariableExpression =
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableActiveFuncArgState>
  | WithUiState<VariableHighlightFuncUnboundState>
  | WithUiState<VariableHighlightCallArgState>
  | WithUiState<VariableMatchFuncBoundState>
export interface BetaReducePreviewAfterFunctionExpression
  extends FunctionExpressionWithArgBody<
      BetaReducePreviewAfterVariableExpression,
      BetaReducePreviewAfterChildExpression
    > {}
export interface ExecutableBetaReducePreviewAfterCallExpression
  extends Executable<
      'active',
      BetaReducePreviewAfterFunctionExpression,
      BetaReducePreviewAfterVariableExpression
    > {}
export interface NonExecutableBetaReducePreviewAfterCallExpression
  extends NonExecutable<BetaReducePreviewAfterChildExpression> {}
export type BetaReducePreviewAfterChildExpression =
  | BetaReducePreviewAfterVariableExpression
  | BetaReducePreviewAfterFunctionExpression
  | NonExecutableBetaReducePreviewAfterCallExpression

export type BetaReducePreviewCrossedVariableExpression =
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableRemovedFuncArgState>
  | WithUiState<VariableHighlightFuncUnboundState>
  | WithUiState<VariableRemovedCallArgState>
  | WithUiState<VariableActiveFuncBoundState>
export interface BetaReducePreviewCrossedFunctionExpression
  extends FunctionExpressionWithArgBody<
      BetaReducePreviewCrossedVariableExpression,
      BetaReducePreviewCrossedChildExpression
    > {}
export interface ExecutableBetaReducePreviewCrossedCallExpression
  extends Executable<
      'active',
      BetaReducePreviewCrossedFunctionExpression,
      BetaReducePreviewCrossedVariableExpression
    > {}
export interface NonExecutableBetaReducePreviewCrossedCallExpression
  extends NonExecutable<BetaReducePreviewCrossedChildExpression> {}
export type BetaReducePreviewCrossedChildExpression =
  | BetaReducePreviewCrossedVariableExpression
  | BetaReducePreviewCrossedFunctionExpression
  | NonExecutableBetaReducePreviewCrossedCallExpression

export type ExecutableCallExpression =
  | ExecutableInactiveCallExpression
  | ExecutableActiveCallExpression
  | ExecutableShowFuncBoundCallExpression
  | ExecutableShowFuncArgCallExpression
  | ExecutableShowFuncUnboundCallExpression
  | ExecutableShowCallArgCallExpression
  | ExecutableNeedsAlphaConvertCallExpression
  | ExecutableAlphaConvertDoneCallExpression
  | ExecutableBetaReducePreviewBeforeCallExpression
  | ExecutableBetaReducePreviewAfterCallExpression
  | ExecutableBetaReducePreviewCrossedCallExpression

type ExecutableCallExpressionWithState<
  S extends CallExpressionStates
> = S extends 'inactive'
  ? ExecutableInactiveCallExpression
  : S extends 'active'
    ? ExecutableActiveCallExpression
    : S extends 'showFuncBound'
      ? ExecutableShowFuncBoundCallExpression
      : S extends 'showFuncArg'
        ? ExecutableShowFuncArgCallExpression
        : S extends 'showFuncUnbound'
          ? ExecutableShowFuncUnboundCallExpression
          : S extends 'showCallArg'
            ? ExecutableShowCallArgCallExpression
            : S extends 'needsAlphaConvert'
              ? ExecutableNeedsAlphaConvertCallExpression
              : S extends 'alphaConvertDone'
                ? ExecutableAlphaConvertDoneCallExpression
                : S extends 'betaReducePreviewBefore'
                  ? ExecutableBetaReducePreviewBeforeCallExpression
                  : S extends 'betaReducePreviewAfter'
                    ? ExecutableBetaReducePreviewAfterCallExpression
                    : ExecutableBetaReducePreviewCrossedCallExpression
