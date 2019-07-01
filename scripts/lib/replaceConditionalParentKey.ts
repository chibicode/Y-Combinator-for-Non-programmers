import {
  isCall,
  isVariable,
  isFunction,
  isConditional
} from 'src/lib/expressionTypeGuards'
import {
  CallExpression,
  Expression,
  ConditionalExpression,
  FunctionExpression,
  VariableExpression
} from 'src/types/ExpressionTypes'

export default function replaceConditionalParentKey(
  expression: VariableExpression,
  target: ConditionalExpression,
  replaceWith: Expression
): VariableExpression
export default function replaceConditionalParentKey(
  expression: FunctionExpression,
  target: ConditionalExpression,
  replaceWith: Expression
): FunctionExpression
export default function replaceConditionalParentKey(
  expression: CallExpression,
  target: ConditionalExpression,
  replaceWith: Expression
): CallExpression
export default function replaceConditionalParentKey(
  expression: ConditionalExpression,
  target: ConditionalExpression,
  replaceWith: Expression
): ConditionalExpression
export default function replaceConditionalParentKey(
  expression: VariableExpression | FunctionExpression,
  target: ConditionalExpression,
  replaceWith: Expression
): VariableExpression | FunctionExpression
export default function replaceConditionalParentKey(
  expression: Expression,
  target: ConditionalExpression,
  replaceWith: Expression
): Expression
export default function replaceConditionalParentKey(
  expression: Expression,
  target: ConditionalExpression,
  replaceWith: Expression
): Expression {
  if (isVariable(expression)) {
    return expression
  } else if (isCall(expression)) {
    return {
      ...expression,
      arg: replaceConditionalParentKey(expression.arg, target, replaceWith),
      func: replaceConditionalParentKey(expression.func, target, replaceWith)
    }
  } else if (isFunction(expression)) {
    return {
      ...expression,
      body: replaceConditionalParentKey(expression.body, target, replaceWith)
    }
  } else if (isConditional(expression)) {
    if (expression === target) {
      return {
        ...expression,
        condition: replaceWith
      }
    } else {
      return {
        ...expression,
        condition: replaceConditionalParentKey(
          expression.condition,
          target,
          replaceWith
        ),
        trueCase: replaceConditionalParentKey(
          expression.trueCase,
          target,
          replaceWith
        ),
        falseCase: replaceConditionalParentKey(
          expression.falseCase,
          target,
          replaceWith
        )
      }
    }
  } else {
    throw new Error()
  }
}
