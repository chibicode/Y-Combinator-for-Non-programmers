export const expressionToString = (
  expression: ExpressionTypes.AnyExpression
) => {
  switch (expression.type) {
    case 'number': {
      return `${expression.value}`
    }
    case 'variable': {
      return expression.name
    }
    case 'function': {
      return `((${(expression.args || []).join(', ')}) => ${expressionToString(
        expression.body
      )})`
    }
    case 'sum': {
      return `(${expressionToString(expression.left)} + ${expressionToString(
        expression.right
      )})`
    }
    case 'call': {
      return `(${expressionToString(expression.func)}(${(expression.args || [])
        .map(arg => expressionToString(arg))
        .join(', ')}))`
    }
  }
}

const containsImmediatelyExecutableCall = (
  expression: ExpressionTypes.AnyExpression
) => {
  switch (expression.type) {
    case 'number': {
      return false
    }
    case 'variable': {
      return false
    }
    case 'function': {
      return containsImmediatelyExecutableCall(expression.body)
    }
    case 'sum': {
      return (
        containsImmediatelyExecutableCall(expression.left) ||
        containsImmediatelyExecutableCall(expression.right)
      )
    }
    case 'call': {
      switch (expression.func.type) {
        case 'function': {
          return true
        }
        default: {
          return containsImmediatelyExecutableCall(expression.func)
        }
      }
    }
  }
}

export const isInnerMostImmediatelyExecutableCall = (
  expression: ExpressionTypes.CallExpression
) =>
  (expression.args || []).reduce((acc, current) => {
    return !containsImmediatelyExecutableCall(current) && acc
  }, true) &&
  !containsImmediatelyExecutableCall(expression.func) &&
  containsImmediatelyExecutableCall(expression)
