import {
  SteppedExpressionContainer,
  ExpressionContainer
} from 'src/types/ExpressionContainerTypes'
import { VariableExpression } from 'src/types/ExpressionTypes'
import { VariableNames } from 'src/types/VariableNames'
import { VariableSizes } from 'src/types/VariableSizes'

export interface ExpressionRunnerContextProps {
  hidePriorities: boolean
  hideBottomRightBadges: boolean
  isDoneOrReady: boolean
  bottomRightBadgeOverrides: { [key in VariableNames]?: string }
  highlightOverrides: {
    [key in VariableNames]?: VariableExpression['highlightType']
  }
  started: boolean
  highlightOverrideActiveAfterStart: boolean
  highlightOverridesCallArgAndFuncUnboundOnly: boolean
  highlightFunctions: boolean
  highlightAllChildren: boolean
  variableSize: VariableSizes
}

export type InitializeInstruction =
  | {
      type: 'stepForwardUntilPreviouslyChangedExpressionState'
      state: ExpressionContainer['previouslyChangedExpressionState']
    }
  | {
      type: 'nextIteration'
    }
  | {
      type: 'stepForwardUntilTheEnd'
    }

export interface ExpressionRunnerProps {
  expressionContainer: SteppedExpressionContainer
  hidePriorities: ExpressionRunnerContextProps['hidePriorities']
  hideBottomRightBadges: ExpressionRunnerContextProps['hideBottomRightBadges']
  hideControls: boolean
  explanationsVisibility: 'visible' | 'hidden' | 'hiddenInitialPausedOnly'
  initializeInstructions: readonly InitializeInstruction[]
  lastAllowedExpressionState?: ExpressionContainer['previouslyChangedExpressionState']
  lastAllowedExpressionStateAfterIterations?: number
  hideRunButton?: boolean
  speed: number
  showAllShowSteps?: boolean
  skipAlphaConvert?: boolean
  skipToTheEnd: boolean
  hideFuncUnboundBadgeOnExplanation: boolean
  highlightOverridesCallArgAndFuncUnboundOnly: boolean
  bottomRightBadgeOverrides: ExpressionRunnerContextProps['bottomRightBadgeOverrides']
  highlightOverrides: ExpressionRunnerContextProps['highlightOverrides']
  highlightOverrideActiveAfterStart: boolean
  highlightFunctions: boolean
  convert?: 'toMathBox'
}

export const expressionRunnerContextDefault: ExpressionRunnerContextProps = {
  hidePriorities: false,
  hideBottomRightBadges: false,
  isDoneOrReady: false,
  started: false,
  bottomRightBadgeOverrides: {},
  highlightOverrides: {},
  highlightOverrideActiveAfterStart: false,
  highlightOverridesCallArgAndFuncUnboundOnly: false,
  highlightFunctions: false,
  highlightAllChildren: false,
  variableSize: 'lg'
}
