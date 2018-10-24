import { VariableNames } from 'src/types/yc/VariableNames'

export interface VariableExpression {
  readonly type: 'variable'
  readonly name: VariableNames
  readonly bound: boolean
  readonly highlightType: VariableUiStates['highlightType']
  readonly badgeType: VariableUiStates['badgeType']
  readonly argPriorityAgg: number[]
  readonly funcPriorityAgg: number[]
}

type WithUiState<S extends VariableUiStates> = VariableExpression & S

interface VariableDefaultState {
  readonly highlightType: 'default'
  readonly badgeType: 'none'
}

interface VariableActiveState {
  readonly highlightType: 'active'
  readonly badgeType: 'none'
}

interface VariableEmphasizePriorityOneState {
  readonly highlightType: 'activeEmphasizePriorityOne'
  readonly badgeType: 'none'
}

interface VariableHighlightFuncBoundState {
  readonly highlightType: 'highlighted'
  readonly badgeType: 'funcBound'
  readonly bound: true
}

interface VariableActiveFuncBoundState {
  readonly highlightType: 'active'
  readonly badgeType: 'funcBound'
  readonly bound: true
}

interface VariableHighlightFuncArgState {
  readonly highlightType: 'highlighted'
  readonly badgeType: 'funcArg'
  readonly bound: false
}

interface VariableActiveFuncArgState {
  readonly highlightType: 'active'
  readonly badgeType: 'funcArg'
  readonly bound: false
}

interface VariableHighlightFuncUnboundState {
  readonly highlightType: 'unboundHighlighted'
  readonly badgeType: 'funcUnbound'
  readonly bound: false
}

interface VariableHighlightCallArgState {
  readonly highlightType: 'highlighted'
  readonly badgeType: 'callArg'
}

interface VariableActiveCallArgState {
  readonly highlightType: 'highlighted'
  readonly badgeType: 'callArg'
}

interface VariableConflictFuncUnboundState {
  readonly highlightType: 'conflict'
  readonly badgeType: 'funcUnbound'
  readonly bound: false
}

interface VariableConflictCallArgState {
  readonly highlightType: 'conflict'
  readonly badgeType: 'callArg'
}

interface VariableConflictResolvedFuncUnboundState {
  readonly highlightType: 'conflictResolved'
  readonly badgeType: 'funcUnbound'
  readonly bound: false
}

interface VariableConflictResolvedFuncBoundState {
  readonly highlightType: 'conflictResolved'
  readonly badgeType: 'funcBound'
  readonly bound: true
}

interface VariableMatchFuncBoundState {
  readonly highlightType: 'match'
  readonly badgeType: 'funcBound'
  readonly bound: true
}

interface VariableBetaReducedState {
  readonly highlightType: 'match'
  readonly badgeType: 'betaReduced'
  readonly bound: true
}

interface VariableRemovedFuncArgState {
  readonly highlightType: 'removed'
  readonly badgeType: 'funcArg'
  readonly bound: false
}

interface VariableRemovedCallArgState {
  readonly highlightType: 'removed'
  readonly badgeType: 'callArg'
}

export type VariableUiStates =
  | VariableDefaultState
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

export type DefaultVariable = WithUiState<VariableDefaultState>
export type ActiveVariable = WithUiState<VariableActiveState>
export type EmphasizePriorityOneVariable = WithUiState<
  VariableEmphasizePriorityOneState
>
export type HighlightFuncBoundVariable = WithUiState<
  VariableHighlightFuncBoundState
>
export type ActiveFuncBoundVariable = WithUiState<VariableActiveFuncBoundState>
export type HighlightFuncArgVariable = WithUiState<
  VariableHighlightFuncArgState
>
export type ActiveFuncArgVariable = WithUiState<VariableActiveFuncArgState>
export type HighlightFuncUnboundVariable = WithUiState<
  VariableHighlightFuncUnboundState
>
export type HighlightCallArgVariable = WithUiState<
  VariableHighlightCallArgState
>
export type ActiveCallArgVariable = WithUiState<VariableActiveCallArgState>
export type ConflictFuncUnboundVariable = WithUiState<
  VariableConflictFuncUnboundState
>
export type ConflictCallArgVariable = WithUiState<VariableConflictCallArgState>
export type ConflictResolvedFuncUnboundVariable = WithUiState<
  VariableConflictResolvedFuncUnboundState
>
export type ConflictResolvedFuncBoundVariable = WithUiState<
  VariableConflictResolvedFuncBoundState
>
export type MatchFuncBoundVariable = WithUiState<VariableMatchFuncBoundState>
export type BetaReducedVariable = WithUiState<VariableBetaReducedState>
export type RemovedFuncArgVariable = WithUiState<VariableRemovedFuncArgState>
export type RemovedCallArgVariable = WithUiState<VariableRemovedCallArgState>

export type CallExpressionStates =
  | 'default'
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

type FunctionWithArgBody<
  A extends VariableExpression,
  B extends Expression
> = FunctionExpression & {
  readonly arg: A
  readonly body: B
}

type NonExecutable<E extends Expression> = CallExpression & {
  readonly arg: E
  readonly state: 'default'
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
  readonly priority: 1
}

type ExecutableWithArgFunc<
  S extends CallExpressionStates,
  AV extends VariableExpression,
  AF extends FunctionExpression,
  F extends FunctionExpression
> = CallExpression & {
  readonly arg: AV | AF
  readonly state: S
  readonly func: F
  readonly priority: 1
}

export interface DefaultFunction
  extends FunctionWithArgBody<DefaultVariable, DefaultChild> {}
export interface NonExecutableDefaultCall extends NonExecutable<DefaultChild> {}
export interface ExecutableDefaultCall
  extends Executable<'default', DefaultFunction, DefaultVariable> {}
export type DefaultCall = NonExecutableDefaultCall | ExecutableDefaultCall
export type DefaultChild =
  | DefaultVariable
  | DefaultFunction
  | NonExecutableDefaultCall
export type DefaultExpression = DefaultChild | ExecutableDefaultCall

// ExecutableActiveVariable will only appear
// as an arg of ExecutableActiveCall or
// as an arg of arg/func of ExecutableActiveCall's child function.
export interface ActiveFunction
  extends FunctionWithArgBody<ActiveVariable, ActiveChild> {}
export interface ExecutableActiveFunction
  extends FunctionWithArgBody<EmphasizePriorityOneVariable, ActiveChild> {}
export interface ExecutableActiveCall
  extends Executable<
      'active',
      ExecutableActiveFunction,
      EmphasizePriorityOneVariable
    > {}
export interface NonExecutableActiveCall extends NonExecutable<ActiveChild> {}
export type ActiveChild =
  | ActiveVariable
  | ActiveFunction
  | NonExecutableActiveCall

// On func side, variables (except args) are all VariableHighlightFuncBound
// On arg side, variables are all VariableActive
export interface ExecutableShowFuncBoundCall
  extends ExecutableWithArgFunc<
      'showFuncBound',
      ActiveVariable,
      ShowFuncBoundArgFunction,
      ShowFuncBoundFuncFunction
    > {}
export interface ShowFuncBoundArgFunction
  extends FunctionWithArgBody<ActiveVariable, ShowFuncBoundArgChild> {}
export interface ShowFuncBoundFuncFunction
  extends FunctionWithArgBody<ActiveVariable, ShowFuncBoundFuncChild> {}
export type ShowFuncBoundArgChild =
  | ActiveVariable
  | ShowFuncBoundArgFunction
  | NonExecutableShowFuncBoundArgCall
export interface NonExecutableShowFuncBoundArgCall
  extends NonExecutable<ShowFuncBoundArgChild> {}
export type ShowFuncBoundFuncChild =
  | HighlightFuncBoundVariable
  | ShowFuncBoundFuncFunction
  | NonExecutableShowFuncBoundFuncCall
export interface NonExecutableShowFuncBoundFuncCall
  extends NonExecutable<ShowFuncBoundFuncChild> {}

export type ShowFuncArgVariable =
  | WithUiState<VariableActiveState>
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableHighlightFuncArgState>
export interface ShowFuncArgFunction
  extends FunctionWithArgBody<ShowFuncArgVariable, ShowFuncArgChild> {}
export interface ExecutableShowFuncArgCall
  extends Executable<'active', ShowFuncArgFunction, ShowFuncArgVariable> {}
export interface NonExecutableShowFuncArgCall
  extends NonExecutable<ShowFuncArgChild> {}
export type ShowFuncArgChild =
  | ShowFuncArgVariable
  | ShowFuncArgFunction
  | NonExecutableShowFuncArgCall

export type ShowFuncUnboundVariable =
  | WithUiState<VariableActiveState>
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableActiveFuncArgState>
  | WithUiState<VariableHighlightFuncUnboundState>
export interface ShowFuncUnboundFunction
  extends FunctionWithArgBody<ShowFuncUnboundVariable, ShowFuncUnboundChild> {}
export interface ExecutableShowFuncUnboundCall
  extends Executable<
      'active',
      ShowFuncUnboundFunction,
      ShowFuncUnboundVariable
    > {}
export interface NonExecutableShowFuncUnboundCall
  extends NonExecutable<ShowFuncUnboundChild> {}
export type ShowFuncUnboundChild =
  | ShowFuncUnboundVariable
  | ShowFuncUnboundFunction
  | NonExecutableShowFuncUnboundCall

export type ShowCallArgVariable =
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableActiveFuncArgState>
  | WithUiState<VariableHighlightFuncUnboundState>
  | WithUiState<VariableHighlightCallArgState>
export interface ShowCallArgFunction
  extends FunctionWithArgBody<ShowCallArgVariable, ShowCallArgChild> {}
export interface ExecutableShowCallArgCall
  extends Executable<'active', ShowCallArgFunction, ShowCallArgVariable> {}
export interface NonExecutableShowCallArgCall
  extends NonExecutable<ShowCallArgChild> {}
export type ShowCallArgChild =
  | ShowCallArgVariable
  | ShowCallArgFunction
  | NonExecutableShowCallArgCall

export type NeedsAlphaConvertVariable =
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableActiveFuncArgState>
  | WithUiState<VariableHighlightFuncUnboundState>
  | WithUiState<VariableActiveCallArgState>
  | WithUiState<VariableConflictFuncUnboundState>
  | WithUiState<VariableConflictCallArgState>
export interface NeedsAlphaConvertFunction
  extends FunctionWithArgBody<
      NeedsAlphaConvertVariable,
      NeedsAlphaConvertChild
    > {}
export interface ExecutableNeedsAlphaConvertCall
  extends Executable<
      'active',
      NeedsAlphaConvertFunction,
      NeedsAlphaConvertVariable
    > {}
export interface NonExecutableNeedsAlphaConvertCall
  extends NonExecutable<NeedsAlphaConvertChild> {}
export type NeedsAlphaConvertChild =
  | NeedsAlphaConvertVariable
  | NeedsAlphaConvertFunction
  | NonExecutableNeedsAlphaConvertCall

export type AlphaConvertDoneVariable =
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableActiveFuncArgState>
  | WithUiState<VariableHighlightFuncUnboundState>
  | WithUiState<VariableActiveCallArgState>
  | WithUiState<VariableConflictResolvedFuncUnboundState>
  | WithUiState<VariableConflictResolvedFuncBoundState>
export interface AlphaConvertDoneFunction
  extends FunctionWithArgBody<
      AlphaConvertDoneVariable,
      AlphaConvertDoneChild
    > {}
export interface ExecutableAlphaConvertDoneCall
  extends Executable<
      'active',
      AlphaConvertDoneFunction,
      AlphaConvertDoneVariable
    > {}
export interface NonExecutableAlphaConvertDoneCall
  extends NonExecutable<AlphaConvertDoneChild> {}
export type AlphaConvertDoneChild =
  | AlphaConvertDoneVariable
  | AlphaConvertDoneFunction
  | NonExecutableAlphaConvertDoneCall

export type BetaReducePreviewBeforeVariable =
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableHighlightFuncArgState>
  | WithUiState<VariableHighlightFuncUnboundState>
  | WithUiState<VariableActiveCallArgState>
  | WithUiState<VariableMatchFuncBoundState>
export interface BetaReducePreviewBeforeFunction
  extends FunctionWithArgBody<
      BetaReducePreviewBeforeVariable,
      BetaReducePreviewBeforeChild
    > {}
export interface ExecutableBetaReducePreviewBeforeCall
  extends Executable<
      'active',
      BetaReducePreviewBeforeFunction,
      BetaReducePreviewBeforeVariable
    > {}
export interface NonExecutableBetaReducePreviewBeforeCall
  extends NonExecutable<BetaReducePreviewBeforeChild> {}
export type BetaReducePreviewBeforeChild =
  | BetaReducePreviewBeforeVariable
  | BetaReducePreviewBeforeFunction
  | NonExecutableBetaReducePreviewBeforeCall

export type BetaReducePreviewAfterVariable =
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableActiveFuncArgState>
  | WithUiState<VariableHighlightFuncUnboundState>
  | WithUiState<VariableHighlightCallArgState>
  | WithUiState<VariableMatchFuncBoundState>
export interface BetaReducePreviewAfterFunction
  extends FunctionWithArgBody<
      BetaReducePreviewAfterVariable,
      BetaReducePreviewAfterChild
    > {}
export interface ExecutableBetaReducePreviewAfterCall
  extends Executable<
      'active',
      BetaReducePreviewAfterFunction,
      BetaReducePreviewAfterVariable
    > {}
export interface NonExecutableBetaReducePreviewAfterCall
  extends NonExecutable<BetaReducePreviewAfterChild> {}
export type BetaReducePreviewAfterChild =
  | BetaReducePreviewAfterVariable
  | BetaReducePreviewAfterFunction
  | NonExecutableBetaReducePreviewAfterCall

export type BetaReducePreviewCrossedVariable =
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableRemovedFuncArgState>
  | WithUiState<VariableHighlightFuncUnboundState>
  | WithUiState<VariableRemovedCallArgState>
  | WithUiState<VariableActiveFuncBoundState>
export interface BetaReducePreviewCrossedFunction
  extends FunctionWithArgBody<
      BetaReducePreviewCrossedVariable,
      BetaReducePreviewCrossedChild
    > {}
export interface ExecutableBetaReducePreviewCrossedCall
  extends Executable<
      'active',
      BetaReducePreviewCrossedFunction,
      BetaReducePreviewCrossedVariable
    > {}
export interface NonExecutableBetaReducePreviewCrossedCall
  extends NonExecutable<BetaReducePreviewCrossedChild> {}
export type BetaReducePreviewCrossedChild =
  | BetaReducePreviewCrossedVariable
  | BetaReducePreviewCrossedFunction
  | NonExecutableBetaReducePreviewCrossedCall

export type ExecutableCall =
  | ExecutableDefaultCall
  | ExecutableActiveCall
  | ExecutableShowFuncBoundCall
  | ExecutableShowFuncArgCall
  | ExecutableShowFuncUnboundCall
  | ExecutableShowCallArgCall
  | ExecutableNeedsAlphaConvertCall
  | ExecutableAlphaConvertDoneCall
  | ExecutableBetaReducePreviewBeforeCall
  | ExecutableBetaReducePreviewAfterCall
  | ExecutableBetaReducePreviewCrossedCall

type ExecutableCallWithState<S extends CallStates> = S extends 'default'
  ? ExecutableDefaultCall
  : S extends 'active'
    ? ExecutableActiveCall
    : S extends 'showFuncBound'
      ? ExecutableShowFuncBoundCall
      : S extends 'showFuncArg'
        ? ExecutableShowFuncArgCall
        : S extends 'showFuncUnbound'
          ? ExecutableShowFuncUnboundCall
          : S extends 'showCallArg'
            ? ExecutableShowCallArgCall
            : S extends 'needsAlphaConvert'
              ? ExecutableNeedsAlphaConvertCall
              : S extends 'alphaConvertDone'
                ? ExecutableAlphaConvertDoneCall
                : S extends 'betaReducePreviewBefore'
                  ? ExecutableBetaReducePreviewBeforeCall
                  : S extends 'betaReducePreviewAfter'
                    ? ExecutableBetaReducePreviewAfterCall
                    : ExecutableBetaReducePreviewCrossedCall
