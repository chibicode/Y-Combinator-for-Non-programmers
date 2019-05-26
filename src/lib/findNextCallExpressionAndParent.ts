import {
  isCall,
  isExecutableCall,
  isFunction,
  isConditional,
  isExecutableConditional
} from 'src/lib/expressionTypeGuards'
import {
  CallExpression,
  ExecutableCall,
  Expression,
  FunctionExpression,
  ExecutableConditional,
  ConditionalExpression
} from 'src/types/ExpressionTypes'

export interface FindResult {
  readonly expression?: ExecutableCall | ExecutableConditional
  readonly callParent?: CallExpression
  readonly funcParent?: FunctionExpression
  readonly callParentKey?: 'func' | 'arg'
}

/**
 * Run DFS on callExpression to find ExecutableCallExpression
 * and its parent information (could be missing if root expression).
 * DFS looks for functions first before arguments.
 */
function helper({
  expression,
  callParent,
  callParentKey
}: {
  expression: CallExpression | ConditionalExpression
  callParent?: CallExpression
  callParentKey?: 'func' | 'arg'
}): FindResult {
  if (isCall(expression)) {
    if (isExecutableCall(expression)) {
      return {
        expression,
        callParent,
        callParentKey
      }
    }

    if (isCall(expression.func) || isConditional(expression.func)) {
      const result: FindResult = helper({
        expression: expression.func,
        callParentKey: 'func',
        callParent: expression
      })
      if (result.expression) {
        return result
      }
    }

    if (isCall(expression.arg) || isConditional(expression.arg)) {
      const result: FindResult = helper({
        expression: expression.arg,
        callParentKey: 'arg',
        callParent: expression
      })
      if (result.expression) {
        return result
      }
    }
  } else {
    if (isExecutableConditional(expression)) {
      return {
        expression,
        callParent,
        callParentKey
      }
    }
  }

  const notFound: FindResult = {}
  return notFound
}

export default function findNextCallExpressionAndParent(
  expression: Expression
): FindResult {
  const notFound: FindResult = {}
  if (isCall(expression) || isConditional(expression)) {
    return helper({ expression })
  } else if (isFunction(expression)) {
    let currentExpression: Expression = expression
    let previousExpression: FunctionExpression | null = null
    while (isFunction(currentExpression)) {
      previousExpression = currentExpression
      currentExpression = currentExpression.body
    }
    if (isCall(currentExpression) || isConditional(currentExpression)) {
      const helperResult = helper({
        expression: currentExpression
      })
      if (helperResult.callParent) {
        return helperResult
      } else if (previousExpression) {
        return {
          funcParent: previousExpression,
          expression: helperResult.expression
        }
      }
    }
  }
  return notFound
}
