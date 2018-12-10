import { VariableNames } from 'src/types/yc/VariableNames'

export interface VariableExpression {
  readonly type: 'variable'
  readonly name: VariableNames
  readonly bound: boolean
  readonly highlightType: VariableStates[keyof VariableStates]['highlightType']
  readonly topRightBadgeType: VariableStates[keyof VariableStates]['topRightBadgeType']
  readonly bottomRightBadgeType: VariableStates[keyof VariableStates]['bottomRightBadgeType']
  readonly argPriorityAgg: number[]
  readonly funcPriorityAgg: number[]
}

export type VariableWithState<
  S extends keyof VariableStates
> = VariableExpression & VariableStates[S]

interface VariableStates {
  default: {
    readonly highlightType: 'default'
    readonly topRightBadgeType: 'none'
    readonly bottomRightBadgeType: 'none'
  }
  active: {
    readonly highlightType: 'active'
    readonly topRightBadgeType: 'none'
    readonly bottomRightBadgeType: 'none'
  }
  emphasizePriority: {
    readonly highlightType: 'activeEmphasizePriority'
    readonly topRightBadgeType: 'none'
    readonly bottomRightBadgeType: 'none'
  }
  highlightFuncBound: {
    readonly highlightType: 'highlighted'
    readonly topRightBadgeType: 'none'
    readonly bottomRightBadgeType: 'funcBound'
  }
  activeFuncBound: {
    readonly highlightType: 'active'
    readonly topRightBadgeType: 'none'
    readonly bottomRightBadgeType: 'funcBound'
  }
  highlightFuncArg: {
    readonly highlightType: 'highlighted'
    readonly topRightBadgeType: 'none'
    readonly bottomRightBadgeType: 'funcArg'
  }
  activeFuncArg: {
    readonly highlightType: 'active'
    readonly topRightBadgeType: 'none'
    readonly bottomRightBadgeType: 'funcArg'
  }
  highlightFuncUnbound: {
    readonly highlightType: 'highlighted'
    readonly topRightBadgeType: 'none'
    readonly bottomRightBadgeType: 'funcUnbound'
  }
  activeFuncUnbound: {
    readonly highlightType: 'active'
    readonly topRightBadgeType: 'none'
    readonly bottomRightBadgeType: 'funcUnbound'
  }
  highlightCallArg: {
    readonly highlightType: 'highlighted'
    readonly topRightBadgeType: 'none'
    readonly bottomRightBadgeType: 'callArg'
  }
  activeCallArg: {
    readonly highlightType: 'active'
    readonly topRightBadgeType: 'none'
    readonly bottomRightBadgeType: 'callArg'
  }
  conflictFuncUnbound: {
    readonly highlightType: 'highlighted'
    readonly topRightBadgeType: 'conflict'
    readonly bottomRightBadgeType: 'funcUnbound'
  }
  conflictFuncBound: {
    readonly highlightType: 'highlighted'
    readonly topRightBadgeType: 'conflict'
    readonly bottomRightBadgeType: 'funcBound'
  }
  conflictResolvedFuncUnbound: {
    readonly highlightType: 'highlighted'
    readonly topRightBadgeType: 'conflictResolved'
    readonly bottomRightBadgeType: 'funcUnbound'
  }
  conflictResolvedFuncBound: {
    readonly highlightType: 'highlighted'
    readonly topRightBadgeType: 'conflictResolved'
    readonly bottomRightBadgeType: 'funcBound'
  }
  matchFuncArg: {
    readonly highlightType: 'active'
    readonly topRightBadgeType: 'match'
    readonly bottomRightBadgeType: 'funcArg'
  }
  matchFuncArgHighlighted: {
    readonly highlightType: 'highlighted'
    readonly topRightBadgeType: 'match'
    readonly bottomRightBadgeType: 'funcArg'
  }
  matchFuncBound: {
    readonly highlightType: 'highlighted'
    readonly topRightBadgeType: 'unmatch'
    readonly bottomRightBadgeType: 'funcBound'
  }
  unmatchFuncBound: {
    readonly highlightType: 'highlighted'
    readonly topRightBadgeType: 'match'
    readonly bottomRightBadgeType: 'funcBound'
  }
  betaReduced: {
    readonly highlightType: 'highlighted'
    readonly topRightBadgeType: 'betaReduced'
    readonly bottomRightBadgeType: 'funcBound'
  }
  removedFuncArg: {
    readonly highlightType: 'removed'
    readonly topRightBadgeType: 'none'
    readonly bottomRightBadgeType: 'funcArg'
  }
  removedCallArg: {
    readonly highlightType: 'removed'
    readonly topRightBadgeType: 'none'
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
    ? 'active' | 'emphasizePriority'
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
                      | 'matchFuncBound'
                      | 'unmatchFuncBound'
                  : C extends 'betaReducePreviewAfter'
                    ?
                        | 'activeFuncBound'
                        | 'activeFuncArg'
                        | 'activeFuncUnbound'
                        | 'highlightCallArg'
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
type Distribute<U> = U extends any ? ExecutableStepCall<U> : never
export type ExecutableCall = Distribute<CallStates>
