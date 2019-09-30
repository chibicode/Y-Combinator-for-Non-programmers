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
  readonly shorthandNumber?: number
  readonly shorthandFunc?: 'add' | 'pred'
  readonly shorthandNumberAfterConvert?:
    | 'number'
    | 'blank'
    | 'trueCase'
    | 'falseCase'
    | 'condition'
    | 'binaryFirst'
    | 'binarySecond'
  readonly shorthandNumberPlusOrMinusOne?: 'plus' | 'minus'
  readonly maxNestedFunctionDepth?: number
}

export interface VariableShorthandNumber extends VariableExpression {
  readonly shorthandNumber: NonNullable<VariableExpression['shorthandNumber']>
  readonly shorthandNumberAfterConvert?: VariableExpression['shorthandNumberAfterConvert']
  readonly shorthandNumberPlusOrMinusOne?: VariableExpression['shorthandNumberPlusOrMinusOne']
}

export interface VariableShorthandFunc extends VariableExpression {
  readonly shorthandFunc: NonNullable<VariableExpression['shorthandFunc']>
}

export type VariableWithState<
  S extends keyof VariableStates
> = VariableExpression & VariableStates[S]

export type VariableWithStateShorthandNumber<
  S extends keyof VariableStates
> = VariableShorthandNumber & VariableStates[S]

export type VariableWithEmphasizePriorityAndState<
  S extends keyof VariableStates
> = VariableExpression &
  VariableStates[S] & {
    readonly emphasizePriority: true
  }

export type VariableWithStateShorthandFunc<
  S extends keyof VariableStates
> = VariableShorthandFunc & VariableStates[S]

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
  conflictResolvedCallArg: {
    readonly highlightType: 'conflictResolvedHighlighted'
    readonly topLeftBadgeType: 'conflictResolved'
    readonly bottomRightBadgeType: 'callArg'
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
  highlighted: {
    readonly highlightType: 'highlighted'
    readonly topLeftBadgeType: 'none'
    readonly bottomRightBadgeType: 'none'
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

export type ConditionalStates =
  | 'default'
  | 'conditionActive'
  | 'trueCaseActive'
  | 'falseCaseActive'

export type BinaryStates = 'default' | 'active'

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
      | 'conflictResolvedCallArg'
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
  ? 'active' | 'removedFuncArg' | 'removedCallArg'
  : never

export interface CallExpression {
  readonly state: CallStates
  readonly type: 'call'
  readonly arg: Expression
  readonly func: Expression
  readonly priority: number
  readonly maxNestedFunctionDepth?: number
}

export interface FunctionExpression {
  readonly type: 'function'
  readonly arg: VariableExpression
  readonly body: Expression
  readonly meta?: 'focused' | 'plusOneEffect' | 'minusOneEffect'
  readonly maxNestedFunctionDepth?: number
}

export interface ConditionalExpression {
  readonly type: 'conditional'
  readonly checkType: 'isZero'
  readonly condition: Expression
  readonly trueCase: Expression
  readonly falseCase: Expression
  readonly priority: number
  readonly state: ConditionalStates
  readonly maxNestedFunctionDepth?: number
}

export interface BinaryExpression {
  readonly type: 'binary'
  readonly binaryType: 'multiply'
  readonly first: Expression
  readonly second: Expression
  readonly priority: number
  readonly state: BinaryStates
  readonly maxNestedFunctionDepth?: number
}

export interface RepeatExpression {
  readonly type: 'repeat'
  readonly child: Expression
  readonly count?: number
  readonly countVariable?: VariableNames
  readonly maxNestedFunctionDepth?: number
}

export type Expression =
  | VariableExpression
  | CallExpression
  | FunctionExpression
  | ConditionalExpression
  | RepeatExpression
  | BinaryExpression

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

type NonExecutableBinary<
  A extends Expression,
  B extends Expression
> = BinaryExpression & {
  readonly state: 'default'
  readonly first: A
  readonly second: B
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

type ExecutableShorthand<
  S extends CallStates,
  F extends VariableShorthandFunc,
  N extends VariableShorthandNumber
> = CallExpression &
  ({
    readonly state: S
    readonly arg: N
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

type ExecutableBinaryNumber<
  A extends VariableShorthandNumber,
  B extends VariableShorthandNumber,
  S extends BinaryStates
> = BinaryExpression &
  ({
    readonly first: A
    readonly second: B
    readonly state: S
  })

export type StepVariable<C extends CallStates = 'default'> = VariableWithState<
  CallStateToVariableState<C>
>
export type StepVariableShorthandNumber<
  C extends CallStates = 'default'
> = VariableWithStateShorthandNumber<CallStateToVariableState<C>>
export type StepVariableShorthandFunc<
  C extends CallStates = 'default'
> = VariableWithStateShorthandFunc<CallStateToVariableState<C>>
export interface StepConditional<C extends CallStates = 'default'>
  extends NonExecutableConditional<StepChild<C>, StepChild<C>, StepChild<C>> {}
export interface StepBinary<C extends CallStates = 'default'>
  extends NonExecutableBinary<StepChild<C>, StepChild<C>> {}
export interface StepFunction<C extends CallStates = 'default'>
  extends FunctionWithArgBody<StepVariable<C>, StepChild<C>> {}

export interface NonExecutableStepCall<C extends CallStates = 'default'>
  extends NonExecutable<StepChild<C>> {}
export interface ExecutableStepCallRegular<C extends CallStates = 'default'>
  extends ExecutableRegular<C, StepFunction<C>, StepChild<C>> {}
export interface ExecutableStepCallShorthand<C extends CallStates = 'default'>
  extends ExecutableShorthand<
    C,
    StepVariableShorthandFunc<C>,
    StepVariableShorthandNumber<C>
  > {}
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
export interface ExecutableStepBinary<
  C extends CallStates = 'default',
  S extends BinaryStates = 'default'
>
  extends ExecutableBinaryNumber<
    VariableWithStateShorthandNumber<CallStateToVariableState<C>>,
    VariableWithStateShorthandNumber<CallStateToVariableState<C>>,
    S
  > {}
export type StepChild<C extends CallStates = 'default'> =
  | StepVariable<C>
  | StepFunction<C>
  | StepConditional<C>
  | NonExecutableStepCall<C>
  | RepeatExpression
  | StepBinary<C>

// Map from a union type to another union type
// https://stackoverflow.com/a/51691257/114157
type DistributeStepCallRegular<U> = U extends CallStates
  ? ExecutableStepCallRegular<U>
  : never
export type ExecutableCallRegular = DistributeStepCallRegular<CallStates>

type DistributeStepCallShorthand<U> = U extends CallStates
  ? ExecutableStepCallShorthand<U>
  : never
export type ExecutableCallShorthand = DistributeStepCallShorthand<CallStates>

export type ExecutableCall = ExecutableCallRegular | ExecutableCallShorthand

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

type DistributeStepBinary<U, S extends BinaryStates> = U extends CallStates
  ? ExecutableStepBinary<U, S>
  : never

export type ExecutableBinary<
  S extends BinaryStates = 'default'
> = DistributeStepBinary<CallStates, S>

type DistributeExecutableBinaryStates<S> = S extends BinaryStates
  ? ExecutableBinary<S>
  : never

export type ExecutableBinaryStatesDistributed = DistributeExecutableBinaryStates<
  BinaryStates
>
