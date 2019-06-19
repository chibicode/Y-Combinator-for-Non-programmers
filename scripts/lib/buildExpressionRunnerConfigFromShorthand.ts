import {
  ExpressionRunnerShorthandConfig,
  expressionRunnerSimpleConfigDefault,
  expressionRunnerPlayButtonOnlyConfigDefault,
  expressionRunnerPairSimpleConfigDefault,
  expressionRunnerPairSimpleDeprecatedConfig,
  expressionRunnerSingleStepConfigDefault,
  isExpressionRunnerSimpleConfig,
  isExpressionRunnerPlayButtonOnlyConfig,
  isExpressionRunnerPairSimpleConfig,
  isExpressionRunnerPairSimpleDeprecatedConfig,
  ExpressionRunnerSimpleConfig,
  ExpressionRunnerPlayButtonOnlyConfig,
  ExpressionRunnerPairSimpleConfig,
  ExpressionRunnerPairSimpleDeprecatedConfig,
  ExpressionRunnerSingleStepConfig
} from 'scripts/lib/expressionRunnerShorthandConfig'
import {
  SteppedExpressionContainer,
  ExpressionContainer
} from 'src/types/ExpressionContainerTypes'
import { allMaxWidths } from 'src/lib/theme/maxWidths'
import {
  InitializeInstruction,
  ExpressionRunnerContextProps,
  expressionRunnerContextDefault
} from 'src/types/ExpressionRunnerTypes'

interface ExpressionRunnerConfig {
  expressionContainer: SteppedExpressionContainer
  hidePriorities: ExpressionRunnerContextProps['hidePriorities']
  hideBottomRightBadges: ExpressionRunnerContextProps['hideBottomRightBadges']
  hideControls: boolean
  explanationsVisibility:
    | 'visible'
    | 'hidden'
    | 'hiddenInitialPausedOnly'
    | 'hiddenInitialAndLastPausedOnly'
  variableSize: ExpressionRunnerContextProps['variableSize']
  initializeInstructions: readonly InitializeInstruction[]
  maxStepsAllowed?: number
  lastAllowedExpressionState?: ExpressionContainer['previouslyChangedExpressionState']
  lastAllowedExpressionStateAfterIterations?: number
  containerSize: keyof typeof allMaxWidths
  resetIndex: boolean
  hidePlayButton?: boolean
  speed: number
  showAllShowSteps?: boolean
  skipAlphaConvert?: boolean
  skipToTheEnd: boolean
  hideFuncUnboundBadgeOnExplanation: boolean
  highlightOverridesCallArgAndFuncUnboundOnly: boolean
  bottomRightBadgeOverrides: ExpressionRunnerContextProps['bottomRightBadgeOverrides']
  highlightOverrides: ExpressionRunnerContextProps['highlightOverrides']
  caption?: React.ReactNode
  highlightOverrideActiveAfterStart: boolean
  showOnlyFocused: ExpressionRunnerContextProps['showOnlyFocused']
  argPriorityAggHighlights: readonly number[]
  funcPriorityAggHighlights: readonly number[]
  highlightFunctions: boolean
  superFastForward: boolean
  highlightNumber?: number
}

const expressionRunnerDefaults = {
  hidePriorities: expressionRunnerContextDefault.hidePriorities,
  hideBottomRightBadges: expressionRunnerContextDefault.hideBottomRightBadges,
  hideControls: false,
  explanationsVisibility: 'visible',
  variableSize: expressionRunnerContextDefault.variableSize,
  initializeInstructions: [],
  containerSize: 'xxs',
  resetIndex: false,
  skipToTheEnd: false,
  hidePlayButton: false,
  speed: 1,
  hideFuncUnboundBadgeOnExplanation: false,
  highlightOverridesCallArgAndFuncUnboundOnly: false,
  bottomRightBadgeOverrides:
    expressionRunnerContextDefault.bottomRightBadgeOverrides,
  highlightOverrides: expressionRunnerContextDefault.highlightOverrides,
  highlightOverrideActiveAfterStart:
    expressionRunnerContextDefault.highlightOverrideActiveAfterStart,
  showOnlyFocused: expressionRunnerContextDefault.showOnlyFocused,
  argPriorityAggHighlights: [],
  funcPriorityAggHighlights: [],
  highlightFunctions: false,
  superFastForward: false
}

// TODO: Must return a single ExpressionRunnerConfig or an object for pairs

const buildExpressionRunnerConfigFromShorthand = (
  shorthand: Record<string, ExpressionRunnerShorthandConfig>
): ExpressionRunnerConfig => {
  return Object.entries(shorthand)
    .map(([key, config]) => {
      if (isExpressionRunnerSimpleConfig(config)) {
        const mergedWithDefault: ExpressionRunnerSimpleConfig = {
          ...config,
          ...expressionRunnerSimpleConfigDefault
        }

        // TODO: Create runner props
        // {
        //   speed: mergedWithDefault.speed
        // }

        // Then merge with runner defaults
      } else if (isExpressionRunnerPlayButtonOnlyConfig(config)) {
        const mergedWithDefault: ExpressionRunnerPlayButtonOnlyConfig = {
          ...config,
          ...expressionRunnerPlayButtonOnlyConfigDefault
        }
      } else if (isExpressionRunnerPairSimpleConfig(config)) {
        const mergedWithDefault: ExpressionRunnerPairSimpleConfig = {
          ...config,
          ...expressionRunnerPairSimpleConfigDefault
        }
      } else if (isExpressionRunnerPairSimpleDeprecatedConfig(config)) {
        const mergedWithDefault: ExpressionRunnerPairSimpleDeprecatedConfig = {
          ...config,
          ...expressionRunnerPairSimpleDeprecatedConfig
        }
      } else {
        const mergedWithDefault: ExpressionRunnerSingleStepConfig = {
          ...config,
          ...expressionRunnerSingleStepConfigDefault
        }
      }
    })
    .reduce((acc, current) => ({ ...acc, ...current }), {})
}

export default buildExpressionRunnerConfigFromShorthand
