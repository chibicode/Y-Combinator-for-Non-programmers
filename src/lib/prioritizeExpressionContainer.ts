import {
  PrioritizedExpressionContainer,
  UnprioritizedExpressionContainer
} from 'src/types/ExpressionContainerTypes'
import {
  CallExpression,
  Expression,
  FunctionExpression,
  isCallExpression,
  isVariableExpression,
  VariableExpression
} from 'src/types/ExpressionTypes'
import {
  isPrioritizedCallExpression,
  isPrioritizedFunctionExpression,
  isPrioritizedVariableExpression,
  PrioritizedCallExpression,
  PrioritizedExpression,
  PrioritizedFunctionExpression,
  PrioritizedVariableExpression
} from 'src/types/PrioritizedExpressionTypes'

function prioritizeCallExpression({
  expression,
  priority
}: {
  expression: CallExpression
  priority: number
}): PrioritizedCallExpression {
  let newArg: PrioritizedExpression
  let newFunc: PrioritizedExpression

  if (isCallExpression(expression.arg)) {
    const argResult = prioritizeCallExpression({
      expression: expression.arg,
      priority
    })
    newArg = argResult
    priority = argResult.priority + 1
  } else {
    newArg = prioritizeExpression(expression.arg)
  }

  if (isCallExpression(expression.func)) {
    const funcResult = prioritizeCallExpression({
      expression: expression.func,
      priority
    })
    newFunc = funcResult
    priority = funcResult.priority + 1
  } else {
    newFunc = prioritizeExpression(expression.func)
  }

  return {
    ...expression,
    func: newFunc,
    arg: newArg,
    priority
  }
}

function prioritizeExpression(
  expression: VariableExpression
): PrioritizedVariableExpression
function prioritizeExpression(
  expression: CallExpression
): PrioritizedCallExpression
function prioritizeExpression(
  expression: FunctionExpression
): PrioritizedFunctionExpression
function prioritizeExpression(expression: Expression): PrioritizedExpression
function prioritizeExpression(expression: Expression) {
  if (isVariableExpression(expression)) {
    return {
      ...expression,
      argPriorityAgg: new Array<number>(),
      funcPriorityAgg: new Array<number>()
    }
  } else if (isCallExpression(expression)) {
    return prioritizeCallExpression({
      priority: 1,
      expression
    })
  } else {
    return {
      ...expression,
      arg: prioritizeExpression(expression.arg),
      body: prioritizeExpression(expression.body)
    }
  }
}

function populatePriorityAggs<E extends PrioritizedExpression>({
  expression,
  argPriorityAgg,
  funcPriorityAgg
}: {
  expression: E
  argPriorityAgg: number[]
  funcPriorityAgg: number[]
}): E {
  if (isPrioritizedCallExpression(expression)) {
    return Object.assign({}, expression, {
      arg: populatePriorityAggs({
        expression: expression.arg,
        argPriorityAgg: [...argPriorityAgg, expression.priority],
        funcPriorityAgg: new Array<number>()
      }),
      func: populatePriorityAggs({
        expression: expression.func,
        argPriorityAgg: new Array<number>(),
        funcPriorityAgg: [...funcPriorityAgg, expression.priority]
      })
    })
  } else if (isPrioritizedFunctionExpression(expression)) {
    return Object.assign({}, expression, {
      arg: populatePriorityAggs({
        expression: expression.arg,
        argPriorityAgg,
        funcPriorityAgg
      }),
      body: populatePriorityAggs({
        expression: expression.body,
        argPriorityAgg: new Array<number>(),
        funcPriorityAgg: new Array<number>()
      })
    })
  } else if (isPrioritizedVariableExpression(expression)) {
    return Object.assign({}, expression, {
      argPriorityAgg,
      funcPriorityAgg
    })
  }
  throw new Error()
}

export default function prioritizeExpressionContainer(
  expressionContainer: UnprioritizedExpressionContainer<VariableExpression>
): PrioritizedExpressionContainer<PrioritizedVariableExpression>
export default function prioritizeExpressionContainer(
  expressionContainer: UnprioritizedExpressionContainer<CallExpression>
): PrioritizedExpressionContainer<PrioritizedCallExpression>
export default function prioritizeExpressionContainer(
  expressionContainer: UnprioritizedExpressionContainer<FunctionExpression>
): PrioritizedExpressionContainer<PrioritizedFunctionExpression>
export default function prioritizeExpressionContainer(
  expressionContainer: UnprioritizedExpressionContainer<Expression>
): PrioritizedExpressionContainer<PrioritizedExpression>
export default function prioritizeExpressionContainer(
  expressionContainer: UnprioritizedExpressionContainer<Expression>
) {
  return {
    prioritized: true,
    needsReset: expressionContainer.needsReset,
    expression: populatePriorityAggs({
      expression: prioritizeExpression(expressionContainer.expression),
      argPriorityAgg: new Array<number>(),
      funcPriorityAgg: new Array<number>()
    })
  }
}
