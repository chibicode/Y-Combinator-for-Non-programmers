import { VariableNames } from 'src/types/yc/VariableNames'

export interface VariableExpression {
  readonly type: 'variable'
  readonly name: VariableNames
  readonly bound: boolean
  readonly highlightType: VariableStates[keyof VariableStates]['highlightType']
  readonly badgeType: VariableStates[keyof VariableStates]['badgeType']
  readonly argPriorityAgg: number[]
  readonly funcPriorityAgg: number[]
}

export type VariableWithState<
  S extends keyof VariableStates
> = VariableExpression & VariableStates[S]

interface VariableStates {
  default: {
    readonly highlightType: 'default'
    readonly badgeType: 'none'
  }
  active: {
    readonly highlightType: 'active'
    readonly badgeType: 'none'
  }
  emphasizePriority: {
    readonly highlightType: 'activeEmphasizePriorityOne'
    readonly badgeType: 'none'
  }
  highlightFuncBound: {
    readonly highlightType: 'highlighted'
    readonly badgeType: 'funcBound'
  }
  activeFuncBound: {
    readonly highlightType: 'active'
    readonly badgeType: 'funcBound'
  }
  highlightFuncArg: {
    readonly highlightType: 'highlighted'
    readonly badgeType: 'funcArg'
  }
  activeFuncArg: {
    readonly highlightType: 'active'
    readonly badgeType: 'funcArg'
  }
  highlightFuncUnbound: {
    readonly highlightType: 'unboundHighlighted'
    readonly badgeType: 'funcUnbound'
  }
  highlightCallArg: {
    readonly highlightType: 'highlighted'
    readonly badgeType: 'callArg'
  }
  activeCallArg: {
    readonly highlightType: 'active'
    readonly badgeType: 'callArg'
  }
  conflictFuncUnbound: {
    readonly highlightType: 'conflict'
    readonly badgeType: 'funcUnbound'
  }
  conflictCallArg: {
    readonly highlightType: 'conflict'
    readonly badgeType: 'callArg'
  }
  conflictResolvedFuncUnbound: {
    readonly highlightType: 'conflictResolved'
    readonly badgeType: 'funcUnbound'
  }
  conflictResolvedFuncBound: {
    readonly highlightType: 'conflictResolved'
    readonly badgeType: 'funcBound'
  }
  matchFuncBound: {
    readonly highlightType: 'match'
    readonly badgeType: 'funcBound'
  }
  betaReduced: {
    readonly highlightType: 'match'
    readonly badgeType: 'betaReduced'
  }
  removedFuncArg: {
    readonly highlightType: 'removed'
    readonly badgeType: 'funcArg'
  }
  removedCallArg: {
    readonly highlightType: 'removed'
    readonly badgeType: 'callArg'
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
    : C extends 'showFuncBound'
      ? 'active' | 'highlightFuncBound'
      : C extends 'showFuncArg'
        ? 'active' | 'activeFuncBound' | 'highlightFuncArg'
        : C extends 'showFuncUnbound'
          ?
              | 'active'
              | 'activeFuncBound'
              | 'activeFuncArg'
              | 'highlightFuncUnbound'
          : C extends 'showCallArg'
            ?
                | 'activeFuncBound'
                | 'activeFuncArg'
                | 'highlightFuncUnbound'
                | 'highlightCallArg'
            : C extends 'needsAlphaConvert'
              ?
                  | 'activeFuncBound'
                  | 'activeFuncArg'
                  | 'highlightFuncUnbound'
                  | 'activeCallArg'
                  | 'conflictFuncUnbound'
                  | 'conflictCallArg'
              : C extends 'alphaConvertDone'
                ?
                    | 'activeFuncBound'
                    | 'activeFuncArg'
                    | 'highlightFuncUnbound'
                    | 'activeCallArg'
                    | 'conflictResolvedFuncUnbound'
                    | 'conflictResolvedFuncBound'
                : C extends 'betaReducePreviewBefore'
                  ?
                      | 'activeFuncBound'
                      | 'highlightFuncArg'
                      | 'highlightFuncUnbound'
                      | 'activeCallArg'
                      | 'matchFuncBound'
                  : C extends 'betaReducePreviewAfter'
                    ?
                        | 'activeFuncBound'
                        | 'activeFuncArg'
                        | 'highlightFuncUnbound'
                        | 'highlightCallArg'
                        | 'betaReduced'
                    : C extends 'betaReducePreviewCrossed'
                      ? 'active' | 'removedFuncArg' | 'removedCallArg'
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
  V extends VariableExpression
> = CallExpression & {
  readonly arg: V | F
  readonly state: S
  readonly func: F
  readonly priority: 1
}

export type StepVariable<C extends CallStates> = VariableWithState<CtoV<C>>
export interface StepFunction<C extends CallStates>
  extends FunctionWithArgBody<StepVariable<C>, StepChild<C>> {}
export interface NonExecutableStepCall<C extends CallStates>
  extends NonExecutable<StepChild<C>> {}
export interface ExecutableStepCall<C extends CallStates>
  extends Executable<C, StepFunction<C>, StepVariable<C>> {}
export type StepCall<C extends CallStates> =
  | NonExecutableStepCall<C>
  | ExecutableStepCall<C>
export type StepChild<C extends CallStates> =
  | StepVariable<C>
  | StepFunction<C>
  | NonExecutableStepCall<C>

// Map from a union type to another union type
// https://stackoverflow.com/a/51691257/114157
type Distribute<U> = U extends any ? ExecutableStepCall<U> : never
export type ExecutableCall = Distribute<CallStates>

// type ExecutableCallWithState<S extends CallStates> = S extends 'default'
//   ? ExecutableDefaultCall
//   : S extends 'active'
//     ? ExecutableActiveCall
//     : S extends 'showFuncBound'
//       ? ExecutableShowFuncBoundCall
//       : S extends 'showFuncArg'
//         ? ExecutableShowFuncArgCall
//         : S extends 'showFuncUnbound'
//           ? ExecutableShowFuncUnboundCall
//           : S extends 'showCallArg'
//             ? ExecutableShowCallArgCall
//             : S extends 'needsAlphaConvert'
//               ? ExecutableNeedsAlphaConvertCall
//               : S extends 'alphaConvertDone'
//                 ? ExecutableAlphaConvertDoneCall
//                 : S extends 'betaReducePreviewBefore'
//                   ? ExecutableBetaReducePreviewBeforeCall
//                   : S extends 'betaReducePreviewAfter'
//                     ? ExecutableBetaReducePreviewAfterCall
//                     : ExecutableBetaReducePreviewCrossedCall
