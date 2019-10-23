import { VariableNames } from 'src/types/VariableNames'
import {
  VariableShorthandNumber,
  VariableShorthandFunc,
  ConditionalExpression,
  BinaryExpression
} from 'src/types/ExpressionTypes'

export interface HighlightedVariableExpressionParams {
  readonly name: VariableNames
  readonly highlighted: true
}

export interface QuestionShorthandNumberAfterConvertParams {
  readonly shorthandNumberAfterConvert: NonNullable<
    VariableShorthandNumber['shorthandNumberAfterConvert']
  >
  readonly initialHighlight?: boolean
}

export interface VariableShorthandFuncParams {
  readonly shorthandFunc: VariableShorthandFunc['shorthandFunc']
  readonly initialHighlight?: boolean
}

export interface VariableShorthandNumberParams {
  readonly shorthandNumber: VariableShorthandNumber['shorthandNumber']
  readonly initialHighlight?: boolean
  readonly shorthandNumberAfterConvert?: VariableShorthandNumber['shorthandNumberAfterConvert']
}

export type VariableExpressionParams = VariableNames

export interface FunctionExpressionParams {
  readonly arg: VariableExpressionParams | HighlightedVariableExpressionParams
  readonly body: ExpressionParams
}
// https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540
export interface CallExpressionParams extends ReadonlyArray<ExpressionParams> {}

export interface ConditionalExpressionParams {
  readonly condition: ExpressionParams
  readonly trueCase: ExpressionParams
  readonly falseCase: ExpressionParams
  readonly checkType: ConditionalExpression['checkType']
}

export interface BinaryExpressionParams {
  readonly first: ExpressionParams
  readonly second: ExpressionParams
  readonly binaryType: BinaryExpression['binaryType']
}

export interface RepeatExpressionParams {
  readonly child: ExpressionParams
  readonly count?: number
  readonly countVariable?: VariableNames
}

export type ExpressionParams =
  | VariableExpressionParams
  | FunctionExpressionParams
  | CallExpressionParams
  | HighlightedVariableExpressionParams
  | VariableShorthandNumberParams
  | ConditionalExpressionParams
  | RepeatExpressionParams
  | VariableShorthandFuncParams
  | QuestionShorthandNumberAfterConvertParams
  | BinaryExpressionParams
