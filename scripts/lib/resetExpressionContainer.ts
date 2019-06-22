import resetExpression from 'scripts/lib/resetExpression'
import { ContainerWithState } from 'src/types/ExpressionContainerTypes'
import { StepChild } from 'src/types/ExpressionTypes'

export default function resetExpressionContainer(
  expressionContainer: ContainerWithState<'needsReset'>
): ContainerWithState<'needsPrioritize', StepChild<'default'>> {
  return {
    containerState: 'needsPrioritize',
    expression: resetExpression(expressionContainer.expression),
    previouslyChangedExpressionState: 'default',
    unaryJustExecuted: expressionContainer.unaryJustExecuted
  }
}
