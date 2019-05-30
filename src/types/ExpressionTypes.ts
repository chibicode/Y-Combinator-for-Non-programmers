import { VariableNames } from 'src/types/VariableNames'

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
  readonly shorthandBinary?: 'isZero'
  readonly shorthandNumber?: number
  readonly shorthandUnary?: 'pred'
  readonly isMagical?: boolean
}

export interface VariableShorthandBinary extends VariableExpression {
  readonly shorthandBinary: NonNullable<VariableExpression['shorthandBinary']>
}

export interface VariableShorthandNumber extends VariableExpression {
  readonly shorthandNumber: NonNullable<VariableExpression['shorthandNumber']>
}

export interface VariableShorthandUnary extends VariableExpression {
  readonly shorthandUnary: NonNullable<VariableExpression['shorthandUnary']>
}

export interface VariableShorthandNonUnaryNumber extends VariableExpression {
  readonly shorthandUnary: undefined
  readonly shorthandNumber: NonNullable<VariableExpression['shorthandNumber']>
}

export interface MagicalVariable extends VariableExpression {
  readonly isMagical: true
}

export type VariableShorthandUnaryNumber = VariableShorthandNumber &
  VariableShorthandUnary

export type VariableWithState<
  S extends keyof VariableStates
> = VariableExpression & VariableStates[S]

export type VariableWithStateShorthandBinary<
  S extends keyof VariableStates
> = VariableShorthandBinary & VariableStates[S]

export type VariableWithStateShorthandNumber<
  S extends keyof VariableStates
> = VariableShorthandNumber & VariableStates[S]

export type VariableWithStateShorthandUnary<
  S extends keyof VariableStates
> = VariableShorthandUnary & VariableStates[S]

export type VariableWithStateShorthandNonUnaryNumber<
  S extends keyof VariableStates
> = VariableShorthandNonUnaryNumber & VariableStates[S]

export type VariableWithEmphasizePriorityAndState<
  S extends keyof VariableStates
> = VariableExpression &
  VariableStates[S] & {
    readonly emphasizePriority: true
  }

export type MagicalVariableWithState<
  S extends keyof VariableStates
> = MagicalVariable & VariableStates[S]

interface VariableStates {
  default: {
    readonly highlightType: 'default' | 'initialHighlighted'
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
  | 'betaReducePreviewUnaryExecuted'
  | 'betaReducePreviewCrossed'

export type ConditionalStates =
  | 'default'
  | 'conditionActive'
  | 'trueCaseActive'
  | 'falseCaseActive'
  | 'trueCaseOnly'
  | 'falseCaseOnly'

// Call state to possible variable state
export type CallStateToVariableState<C extends CallStates> = C extends 'default'
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
  : C extends 'betaReducePreviewUnaryExecuted'
  ? 'active'
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

export interface FunctionExpressionMeta {
  readonly focused: boolean
}

export interface FunctionExpression {
  readonly type: 'function'
  readonly arg: VariableExpression
  readonly body: Expression
  readonly meta?: FunctionExpressionMeta
}

export interface ConditionalExpression {
  readonly type: 'conditional'
  readonly checkType: 'isZero'
  readonly condition: Expression
  readonly trueCase: Expression
  readonly falseCase: Expression
  readonly priority: number
  readonly state: ConditionalStates
}

export type Expression =
  | VariableExpression
  | CallExpression
  | FunctionExpression
  | ConditionalExpression

type FunctionWithArgBody<
  A extends VariableExpression,
  B extends Expression
> = FunctionExpression & {
  readonly arg: A
  readonly body: B
}

type NonExecutableConditional<
  C extends Expression,
  T extends Expression,
  F extends Expression
> = ConditionalExpression & {
  readonly state: 'default'
  readonly condition: C
  readonly trueCase: T
  readonly falseCase: F
}

type NonExecutable<E extends Expression> = CallExpression & {
  readonly arg: E
  readonly state: 'default'
  readonly func: E
}

type ExecutableRegular<
  S extends CallStates,
  F extends FunctionExpression,
  E extends Expression
> = CallExpression &
  ({
    readonly state: S
    readonly arg: E
    readonly func: F
  })

type ExecutableShorthandBinary<
  S extends CallStates,
  F extends VariableShorthandBinary,
  E extends Expression
> = CallExpression &
  ({
    readonly state: S
    readonly arg: E
    readonly func: F
  })

type ExecutableMagical<
  S extends CallStates,
  F extends MagicalVariable,
  E extends Expression
> = CallExpression &
  ({
    readonly state: S
    readonly arg: E
    readonly func: F
  })

type ExecutableConditionalNumber<
  C extends VariableShorthandNumber,
  T extends Expression,
  F extends Expression,
  S extends ConditionalStates
> = ConditionalExpression &
  ({
    readonly condition: C
    readonly trueCase: T
    readonly falseCase: F
    readonly state: S
  })

export type StepVariable<C extends CallStates = 'default'> = VariableWithState<
  CallStateToVariableState<C>
>
export type StepVariableShorthandBinary<
  C extends CallStates = 'default'
> = VariableWithStateShorthandBinary<CallStateToVariableState<C>>
export type StepVariableShorthandNumber<
  C extends CallStates = 'default'
> = VariableWithStateShorthandNumber<CallStateToVariableState<C>>
export type StepVariableShorthandUnary<
  C extends CallStates = 'default'
> = VariableWithStateShorthandUnary<CallStateToVariableState<C>>
export type StepVariableShorthandNonUnaryNumber<
  C extends CallStates = 'default'
> = VariableWithStateShorthandNonUnaryNumber<CallStateToVariableState<C>>
export type StepMagicalVariable<
  C extends CallStates = 'default'
> = MagicalVariableWithState<CallStateToVariableState<C>>
export interface StepConditional<C extends CallStates = 'default'>
  extends NonExecutableConditional<StepChild<C>, StepChild<C>, StepChild<C>> {}
export interface StepFunction<C extends CallStates = 'default'>
  extends FunctionWithArgBody<StepVariable<C>, StepChild<C>> {}

export interface NonExecutableStepCall<C extends CallStates = 'default'>
  extends NonExecutable<StepChild<C>> {}
export interface ExecutableStepCallRegular<C extends CallStates = 'default'>
  extends ExecutableRegular<C, StepFunction<C>, StepChild<C>> {}
export interface ExecutableStepCallShorthandBinary<
  C extends CallStates = 'default'
>
  extends ExecutableShorthandBinary<
    C,
    StepVariableShorthandBinary<C>,
    StepChild<C>
  > {}
export interface ExecutableStepCallMagical<C extends CallStates = 'default'>
  extends ExecutableMagical<C, StepMagicalVariable<C>, StepChild<C>> {}
export interface ExecutableStepConditional<
  C extends CallStates = 'default',
  S extends ConditionalStates = 'default'
>
  extends ExecutableConditionalNumber<
    VariableWithStateShorthandNumber<CallStateToVariableState<C>>,
    StepChild<C>,
    StepChild<C>,
    S
  > {}
export type StepChild<C extends CallStates = 'default'> =
  | StepVariable<C>
  | StepFunction<C>
  | StepConditional<C>
  | NonExecutableStepCall<C>

// Map from a union type to another union type
// https://stackoverflow.com/a/51691257/114157
type DistributeStepCallRegular<U> = U extends CallStates
  ? ExecutableStepCallRegular<U>
  : never
export type ExecutableCallRegular = DistributeStepCallRegular<CallStates>

type DistributeStepCallShorthandBinary<U> = U extends CallStates
  ? ExecutableStepCallShorthandBinary<U>
  : never
export type ExecutableCallShorthandBinary = DistributeStepCallShorthandBinary<
  CallStates
>

type DistributeStepCallMagical<U> = U extends CallStates
  ? ExecutableStepCallMagical<U>
  : never
export type ExecutableCallMagical = DistributeStepCallMagical<CallStates>

export type ExecutableCall =
  | ExecutableCallRegular
  | ExecutableCallShorthandBinary
  | ExecutableCallMagical

type DistributeStepConditional<
  U,
  S extends ConditionalStates
> = U extends CallStates ? ExecutableStepConditional<U, S> : never

export type ExecutableConditional<
  S extends ConditionalStates = 'default'
> = DistributeStepConditional<CallStates, S>

type DistributeExecutableConditionalStates<S> = S extends ConditionalStates
  ? ExecutableConditional<S>
  : never

export type ExecutableConditionalStatesDistributed = DistributeExecutableConditionalStates<
  ConditionalStates
>
