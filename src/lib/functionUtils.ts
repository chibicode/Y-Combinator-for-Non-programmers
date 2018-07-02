export const expressionToString = (expression: Expression) => {
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
