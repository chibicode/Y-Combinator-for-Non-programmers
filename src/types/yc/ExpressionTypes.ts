import { VariableNames } from 'src/types/yc/VariableNames'

export interface VariableExpression {
  readonly type: 'variable'
  readonly name: VariableNames
  readonly bound: boolean
  readonly highlightType: VariableStates[keyof VariableStates]['highlightType']
  readonly topLeftBadgeType: VariableStates[keyof VariableStates]['topLeftBadgeType']
  readonly bottomRightBadgeType: VariableStates[keyof VariableStates]['bottomRightBadgeType']
  readonly emphasizePriority: boolean
  readonly argPriorityAgg: number[]
  readonly funcPriorityAgg: number[]
  readonly alphaConverCount: number
}

export type VariableWithState<
  S extends keyof VariableStates
> = VariableExpression & VariableStates[S]

export type VariableWithEmphasizePriorityAndState<
  S extends keyof VariableStates
> = VariableExpression &
  VariableStates[S] & {
    readonly emphasizePriority: true
  }

interface VariableStates {
  default: {
    readonly highlightType: 'default'
    readonly topLeftBadgeType: 'none'
    readonly bottomRightBadgeType: 'none'
  }
  active: {
    readonly highlightType: 'active'
    readonly topLeftBadgeType: 'none'
    readonly bottomRightBadgeType: 'none'
  }
  highlightFuncBound: {
    readonly highlightType: 'highlighted'
    readonly topLeftBadgeType: 'none'
    readonly bottomRightBadgeType: 'funcBound'
  }
  activeFuncBound: {
    readonly highlightType: 'active'
    readonly topLeftBadgeType: 'none'
    readonly bottomRightBadgeType: 'funcBound'
  }
  highlightFuncArg: {
    readonly highlightType: 'highlighted'
    readonly topLeftBadgeType: 'none'
    readonly bottomRightBadgeType: 'funcArg'
  }
  activeFuncArg: {
    readonly highlightType: 'active'
    readonly topLeftBadgeType: 'none'
    readonly bottomRightBadgeType: 'funcArg'
  }
  highlightFuncUnbound: {
    readonly highlightType: 'highlighted'
    readonly topLeftBadgeType: 'none'
    readonly bottomRightBadgeType: 'funcUnbound'
  }
  activeFuncUnbound: {
    readonly highlightType: 'active'
    readonly topLeftBadgeType: 'none'
    readonly bottomRightBadgeType: 'funcUnbound'
  }
  highlightCallArg: {
    readonly highlightType: 'highlighted'
    readonly topLeftBadgeType: 'none'
    readonly bottomRightBadgeType: 'callArg'
  }
  highlightCallArgBetaReduceCallArg: {
    readonly highlightType: 'betaReduceCallArgHighlighted'
    readonly topLeftBadgeType: 'none'
    readonly bottomRightBadgeType: 'callArg'
  }
  activeCallArg: {
    readonly highlightType: 'active'
    readonly topLeftBadgeType: 'none'
    readonly bottomRightBadgeType: 'callArg'
  }
  conflictCallArg: {
    readonly highlightType: 'highlighted'
    readonly topLeftBadgeType: 'conflict'
    readonly bottomRightBadgeType: 'callArg'
  }
  conflictFuncUnbound: {
    readonly highlightType: 'highlighted'
    readonly topLeftBadgeType: 'conflict'
    readonly bottomRightBadgeType: 'funcUnbound'
  }
  conflictFuncBound: {
    readonly highlightType: 'highlighted'
    readonly topLeftBadgeType: 'conflict'
    readonly bottomRightBadgeType: 'funcBound'
  }
  conflictResolvedFuncUnbound: {
    readonly highlightType: 'conflictResolvedHighlighted'
    readonly topLeftBadgeType: 'none'
    readonly bottomRightBadgeType: 'funcUnbound'
  }
  conflictResolvedFuncBound: {
    readonly highlightType: 'conflictResolvedHighlighted'
    readonly topLeftBadgeType: 'none'
    readonly bottomRightBadgeType: 'funcBound'
  }
  matchFuncArg: {
    readonly highlightType: 'active'
    readonly topLeftBadgeType: 'match'
    readonly bottomRightBadgeType: 'funcArg'
  }
  matchFuncArgHighlighted: {
    readonly highlightType: 'highlighted'
    readonly topLeftBadgeType: 'match'
    readonly bottomRightBadgeType: 'funcArg'
  }
  unmatchFuncArgHighlighted: {
    readonly highlightType: 'highlighted'
    readonly topLeftBadgeType: 'unmatch'
    readonly bottomRightBadgeType: 'funcArg'
  }
  matchFuncBound: {
    readonly highlightType: 'highlighted'
    readonly topLeftBadgeType: 'unmatch'
    readonly bottomRightBadgeType: 'funcBound'
  }
  unmatchFuncBound: {
    readonly highlightType: 'highlighted'
    readonly topLeftBadgeType: 'match'
    readonly bottomRightBadgeType: 'funcBound'
  }
  betaReduced: {
    readonly highlightType: 'highlighted'
    readonly topLeftBadgeType: 'betaReduced'
    readonly bottomRightBadgeType: 'funcBound'
  }
  removedFuncArg: {
    readonly highlightType: 'removed'
    readonly topLeftBadgeType: 'none'
    readonly bottomRightBadgeType: 'funcArg'
  }
  removedCallArg: {
    readonly highlightType: 'removed'
    readonly topLeftBadgeType: 'none'
    readonly bottomRightBadgeType: 'callArg'
  }
}

export type CallStates =
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

// Call state to possible variable state
export type CtoV<C extends CallStates> = C extends 'default'
  ? 'default'
  : C extends 'active'
  ? 'active'
  : C extends 'showCallArg'
  ? 'active' | 'highlightCallArg'
  : C extends 'showFuncArg'
  ? 'active' | 'activeCallArg' | 'highlightFuncArg'
  : C extends 'showFuncBound'
  ?
      | 'active'
      | 'activeFuncBound'
      | 'activeFuncArg'
      | 'activeCallArg'
      | 'highlightFuncBound'
  : C extends 'showFuncUnbound'
  ?
      | 'active'
      | 'activeFuncBound'
      | 'activeFuncArg'
      | 'activeCallArg'
      | 'activeFuncUnbound'
      | 'highlightFuncUnbound'
  : C extends 'needsAlphaConvert'
  ?
      | 'activeFuncBound'
      | 'activeFuncArg'
      | 'activeFuncUnbound'
      | 'activeCallArg'
      | 'conflictFuncBound'
      | 'conflictCallArg'
      | 'conflictFuncUnbound'
      | 'highlightCallArg'
  : C extends 'alphaConvertDone'
  ?
      | 'activeFuncBound'
      | 'activeFuncArg'
      | 'activeFuncUnbound'
      | 'activeCallArg'
      | 'conflictResolvedFuncUnbound'
      | 'conflictResolvedFuncBound'
      | 'highlightCallArg'
  : C extends 'betaReducePreviewBefore'
  ?
      | 'activeCallArg'
      | 'highlightCallArg'
      | 'activeFuncUnbound'
      | 'matchFuncArg'
      | 'matchFuncArgHighlighted'
      | 'unmatchFuncArgHighlighted'
      | 'matchFuncBound'
      | 'unmatchFuncBound'
  : C extends 'betaReducePreviewAfter'
  ?
      | 'activeFuncBound'
      | 'activeFuncArg'
      | 'activeFuncUnbound'
      | 'highlightCallArgBetaReduceCallArg'
      | 'betaReduced'
  : C extends 'betaReducePreviewCrossed'
  ?
      | 'active'
      | 'removedFuncArg'
      | 'removedCallArg'
      | 'activeFuncUnbound'
      | 'activeFuncBound'
  : never

export interface CallExpression {
  readonly state: CallStates
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
  S extends CallStates,
  F extends FunctionExpression,
  E extends Expression
> = CallExpression & {
  readonly arg: E
  readonly state: S
  readonly func: F
}

export type StepVariable<C extends CallStates = 'default'> = VariableWithState<
  CtoV<C>
>
export interface StepFunction<C extends CallStates = 'default'>
  extends FunctionWithArgBody<StepVariable<C>, StepChild<C>> {}
export interface NonExecutableStepCall<C extends CallStates = 'default'>
  extends NonExecutable<StepChild<C>> {}
export interface ExecutableStepCall<C extends CallStates = 'default'>
  extends Executable<C, StepFunction<C>, StepChild<C>> {}
export type StepChild<C extends CallStates = 'default'> =
  | StepVariable<C>
  | StepFunction<C>
  | NonExecutableStepCall<C>

// Map from a union type to another union type
// https://stackoverflow.com/a/51691257/114157
type Distribute<U> = U extends CallStates ? ExecutableStepCall<U> : never
export type ExecutableCall = Distribute<CallStates>
