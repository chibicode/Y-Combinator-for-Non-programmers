import {
  isCall,
  isExecutableCall,
  isFunction,
  isConditional,
  isExecutableConditional,
  isBinary,
  isExecutableBinary
} from 'src/lib/expressionTypeGuards'
import {
  CallExpression,
  ExecutableCall,
  Expression,
  FunctionExpression,
  ExecutableConditional,
  ConditionalExpression,
  BinaryExpression,
  ExecutableBinary
} from 'src/types/ExpressionTypes'

export interface FindResult {
  readonly expression?:
    | ExecutableCall
    | ExecutableConditional
    | ExecutableBinary
  readonly callParent?: CallExpression
  readonly funcParent?: FunctionExpression
  readonly conditionalParent?: ConditionalExpression
  readonly binaryParent?: BinaryExpression
  readonly callParentKey?: 'func' | 'arg'
  readonly binaryParentKey?: 'first' | 'second'
}

/**
 * Run DFS on callExpression to find ExecutableCallExpression
 * and its parent information (could be missing if root expression).
 * DFS looks for functions first before arguments.
 */
function helper({
  expression,
  conditionalParent,
  callParent,
  callParentKey,
  binaryParent,
  binaryParentKey
}: {
  expression: CallExpression | ConditionalExpression | BinaryExpression
  conditionalParent?: ConditionalExpression
  binaryParent?: BinaryExpression
  callParent?: CallExpression
  callParentKey?: 'func' | 'arg'
  binaryParentKey?: 'first' | 'second'
}): FindResult {
  if (isCall(expression)) {
    if (isExecutableCall(expression)) {
      return {
        expression,
        callParent,
        callParentKey,
        binaryParentKey,
        conditionalParent,
        binaryParent
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
  } else if (isConditional(expression)) {
    if (isExecutableConditional(expression)) {
      return {
        expression,
        callParent,
        callParentKey,
        binaryParentKey,
        conditionalParent,
        binaryParent
      }
    }

    if (
      isCall(expression.condition) ||
      isConditional(expression.condition) ||
      isBinary(expression.condition)
    ) {
      const result: FindResult = helper({
        expression: expression.condition,
        conditionalParent: expression
      })
      if (result.expression) {
        return result
      }
    }
  } else {
    if (isExecutableBinary(expression)) {
      return {
        expression,
        callParent,
        callParentKey,
        binaryParentKey,
        conditionalParent,
        binaryParent
      }
    }

    if (
      isCall(expression.first) ||
      isConditional(expression.first) ||
      isBinary(expression.first)
    ) {
      const result: FindResult = helper({
        expression: expression.first,
        binaryParent: expression,
        binaryParentKey: 'first'
      })
      if (result.expression) {
        return result
      }
    }

    if (
      isCall(expression.second) ||
      isConditional(expression.second) ||
      isBinary(expression.second)
    ) {
      const result: FindResult = helper({
        expression: expression.second,
        binaryParent: expression,
        binaryParentKey: 'second'
      })
      if (result.expression) {
        return result
      }
    }
  }

  const notFound: FindResult = {}
  return notFound
}

export default function findNextExecutableAndParent(
  expression: Expression
): FindResult {
  const notFound: FindResult = {}
  if (isCall(expression) || isConditional(expression) || isBinary(expression)) {
    return helper({ expression })
  } else if (isFunction(expression)) {
    let currentExpression: Expression = expression
    let previousExpression: FunctionExpression | null = null
    while (isFunction(currentExpression)) {
      previousExpression = currentExpression
      currentExpression = currentExpression.body
    }
    if (
      isCall(currentExpression) ||
      isConditional(currentExpression) ||
      isBinary(currentExpression)
    ) {
      const helperResult = helper({
        expression: currentExpression
      })
      if (
        helperResult.callParent ||
        helperResult.conditionalParent ||
        helperResult.binaryParent
      ) {
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
