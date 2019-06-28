import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.vazr,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'md',
  caption: { name: 'thisIsYCombinatorCaption' }
}

export default config
