import {
  isCall,
  isVariable,
  isFunction,
  isConditional,
  isBinary
} from 'src/lib/expressionTypeGuards'
import {
  CallExpression,
  Expression,
  ConditionalExpression,
  FunctionExpression,
  VariableExpression,
  BinaryExpression
} from 'src/types/ExpressionTypes'

export default function replaceFuncParentKey(
  expression: VariableExpression,
  target: FunctionExpression,
  replaceWith: Expression
): VariableExpression
export default function replaceFuncParentKey(
  expression: FunctionExpression,
  target: FunctionExpression,
  replaceWith: Expression
): FunctionExpression
export default function replaceFuncParentKey(
  expression: CallExpression,
  target: FunctionExpression,
  replaceWith: Expression
): CallExpression
export default function replaceFuncParentKey(
  expression: ConditionalExpression,
  target: FunctionExpression,
  replaceWith: Expression
): ConditionalExpression
export default function replaceFuncParentKey(
  expression: BinaryExpression,
  target: FunctionExpression,
  replaceWith: Expression
): BinaryExpression
export default function replaceFuncParentKey(
  expression: VariableExpression | FunctionExpression,
  target: FunctionExpression,
  replaceWith: Expression
): VariableExpression | FunctionExpression
export default function replaceFuncParentKey(
  expression: Expression,
  target: FunctionExpression,
  replaceWith: Expression
): Expression
export default function replaceFuncParentKey(
  expression: Expression,
  target: FunctionExpression,
  replaceWith: Expression
): Expression {
  if (isVariable(expression)) {
    return expression
  } else if (isCall(expression)) {
    return {
      ...expression,
      arg: replaceFuncParentKey(expression.arg, target, replaceWith),
      func: replaceFuncParentKey(expression.func, target, replaceWith)
    }
  } else if (isFunction(expression)) {
    if (expression === target) {
      return {
        ...expression,
        body: replaceWith
      }
    } else {
      return {
        ...expression,
        body: replaceFuncParentKey(expression.body, target, replaceWith)
      }
    }
  } else if (isConditional(expression)) {
    return {
      ...expression,
      condition: replaceFuncParentKey(
        expression.condition,
        target,
        replaceWith
      ),
      trueCase: replaceFuncParentKey(expression.trueCase, target, replaceWith),
      falseCase: replaceFuncParentKey(expression.falseCase, target, replaceWith)
    }
  } else if (isBinary(expression)) {
    return {
      ...expression,
      first: replaceFuncParentKey(expression.first, target, replaceWith),
      second: replaceFuncParentKey(expression.second, target, replaceWith)
    }
  } else {
    throw new Error()
  }
}
