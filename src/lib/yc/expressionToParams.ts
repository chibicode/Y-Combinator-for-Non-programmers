import { isCall, isFunction } from 'src/lib/yc/expressionTypeGuards'
import {
  CallExpressionParams,
  ExpressionParams,
  FunctionExpressionParams,
  VariableExpressionParams
} from 'src/types/yc/ExpressionParamTypes'
import {
  CallExpression,
  Expression,
  FunctionExpression,
  VariableExpression
} from 'src/types/yc/ExpressionTypes'

export default function expressionToParams(
  e: CallExpression
): CallExpressionParams
export default function expressionToParams(
  e: VariableExpression
): VariableExpressionParams
export default function expressionToParams(
  e: FunctionExpression
): FunctionExpressionParams
export default function expressionToParams(e: Expression): ExpressionParams
export default function expressionToParams(e: Expression): ExpressionParams {
  if (isCall(e)) {
    const result: CallExpressionParams = [
      expressionToParams(e.func),
      expressionToParams(e.arg)
    ]
    return result
  } else if (isFunction(e)) {
    return {
      arg: expressionToParams(e.arg),
      body: expressionToParams(e.body)
    }
  } else {
    return e.name
  }
}
