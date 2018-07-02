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
    case 'if': {
      return `((${expressionToString(expression.left)} ${
        expression.compare
      } ${expressionToString(expression.right)}) ? ${expressionToString(
        expression.trueCase
      )} : ${expressionToString(expression.falseCase)})`
    }
    case 'call': {
      return `(${expressionToString(expression.func)}(${(expression.args || [])
        .map(arg => expressionToString(arg))
        .join(', ')}))`
    }
  }
}

export const isInnerMostCall = (expression: ExpressionTypes.CallExpression) =>
  (expression.args || []).reduce((acc, current) => {
    return !containsCall(current) && acc
  }, true) && !containsCall(expression.func)

export const containsCall = (expression: ExpressionTypes.AnyExpression) => {
  switch (expression.type) {
    case 'number': {
      return false
    }
    case 'variable': {
      return false
    }
    case 'function': {
      return containsCall(expression.body)
    }
    case 'sum': {
      return containsCall(expression.left) || containsCall(expression.right)
    }
    case 'if': {
      return (
        containsCall(expression.left) ||
        containsCall(expression.right) ||
        containsCall(expression.trueCase) ||
        containsCall(expression.falseCase)
      )
    }
    case 'call': {
      return true
    }
  }
}
