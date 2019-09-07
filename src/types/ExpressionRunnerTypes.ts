import {
  SteppedExpressionContainer,
  ExpressionContainer
} from 'src/types/ExpressionContainerTypes'
import { VariableExpression } from 'src/types/ExpressionTypes'
import { VariableNames } from 'src/types/VariableNames'
import { allMaxWidths } from 'src/lib/theme/maxWidths'

export interface ExpressionRunnerContextProps {
  hidePriorities: boolean
  hideBottomRightBadges: boolean
  variableSize: 'sm' | 'md' | 'lg' | 'xs' | 'xxs' | 'xxxs'
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
  variableSize: ExpressionRunnerContextProps['variableSize']
  initializeInstructions: readonly InitializeInstruction[]
  lastAllowedExpressionState?: ExpressionContainer['previouslyChangedExpressionState']
  lastAllowedExpressionStateAfterIterations?: number
  containerSize: keyof typeof allMaxWidths
  hidePlayButton?: boolean
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
  convert?: 'toMathBox' | 'toMathBoxPlay'
}

export const expressionRunnerContextDefault: ExpressionRunnerContextProps = {
  hidePriorities: false,
  hideBottomRightBadges: false,
  variableSize: 'sm',
  isDoneOrReady: false,
  started: false,
  bottomRightBadgeOverrides: {},
  highlightOverrides: {},
  highlightOverrideActiveAfterStart: false,
  highlightOverridesCallArgAndFuncUnboundOnly: false,
  highlightFunctions: false,
  highlightAllChildren: false
}
