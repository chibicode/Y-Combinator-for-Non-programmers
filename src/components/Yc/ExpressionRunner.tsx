import { css } from 'emotion'
import React from 'react'
import Container, { ContainerProps } from 'src/components/Container'
import AlphaConvertContext from 'src/components/Yc/AlphaConvertContext'
import ExpressionBetaReducePreviewContext, {
  ExpressionBetaReducePreviewContextProps
} from 'src/components/Yc/ExpressionBetaReducePreviewContext'
import ExpressionBox from 'src/components/Yc/ExpressionBox'
import ExpressionReadyToHighlightContext from 'src/components/Yc/ExpressionReadyToHighlightContext'
import ExpressionRunnerContext, {
  expressionRunnerContextDefault,
  ExpressionRunnerContextProps
} from 'src/components/Yc/ExpressionRunnerContext'
import ExpressionRunnerControls from 'src/components/Yc/ExpressionRunnerControls'
import ExpressionRunnerExplanation from 'src/components/Yc/ExpressionRunnerExplanation'
import { lineHeights } from 'src/lib/theme'
import ExpressionContainerManager, {
  ExpressionContainerSkipOptions
} from 'src/lib/yc/ExpressionContainerManager'
import {
  ExpressionContainerState,
  PreviouslyChangedExpressionState,
  SteppedExpressionContainer
} from 'src/types/yc/ExpressionContainerTypes'

type InitializeInstruction =
  | {
      type: 'stepForwardUntilContainerState'
      state: ExpressionContainerState
    }
  | {
      type: 'stepForwardUntilPreviouslyChangedExpressionState'
      state: PreviouslyChangedExpressionState
    }
  | {
      type: 'stepForwardMultiple'
      count: number
    }

interface ExpressionRunnerProps {
  expressionContainer: SteppedExpressionContainer
  showPriorities: ExpressionRunnerContextProps['showPriorities']
  showControls: boolean
  variableSize: ExpressionRunnerContextProps['variableSize']
  initializeInstructions: ReadonlyArray<InitializeInstruction>
  expressionContainerManagerSkipOptions: ExpressionContainerSkipOptions
  disableReadyToHighlightColoring: boolean
  maxStepsAllowed?: number
  lastAllowedExpressionState?: PreviouslyChangedExpressionState
  indexOffset: number
  containerSize: ContainerProps['size']
}

interface ExpressionRunnerState {
  expressionContainerManagerState: ExpressionContainerManager['currentState']
}

const betaReducePreview = (
  previouslyChangedExpressionState: PreviouslyChangedExpressionState
): ExpressionBetaReducePreviewContextProps['betaReducePreview'] => {
  if (previouslyChangedExpressionState === 'betaReducePreviewBefore') {
    return 'before'
  } else if (previouslyChangedExpressionState === 'betaReducePreviewAfter') {
    return 'after'
  } else if (previouslyChangedExpressionState === 'betaReducePreviewCrossed') {
    return 'crossed'
  } else {
    return undefined
  }
}

const expressionContainerManagerSkipOptionsDefault: ExpressionContainerSkipOptions = {
  readyToBetaReduce: true,
  justBetaReduced: true
}

export default class ExpressionRunner extends React.Component<
  ExpressionRunnerProps,
  ExpressionRunnerState
> {
  public static defaultProps = {
    showPriorities: expressionRunnerContextDefault.showPriorities,
    showControls: true,
    variableSize: expressionRunnerContextDefault.variableSize,
    initializeInstructions: [],
    disableReadyToHighlightColoring: false,
    expressionContainerManagerSkipOptions: {},
    indexOffset: 0,
    containerSize: 'xxs'
  }
  private expressionContainerManager: ExpressionContainerManager
  private controlsRef = React.createRef<HTMLDivElement>()

  constructor(props: ExpressionRunnerProps) {
    super(props)
    const {
      expressionContainer,
      expressionContainerManagerSkipOptions,
      indexOffset
      lastAllowedExpressionState
    } = props
    this.expressionContainerManager = new ExpressionContainerManager({
      expressionContainer,
      skipOptions: {
        ...expressionContainerManagerSkipOptionsDefault,
        ...expressionContainerManagerSkipOptions
      },
      indexOffset
      lastAllowedExpressionState
    })

    this.state = {
      expressionContainerManagerState: this.expressionContainerManager
        .currentState
    }
  }

  public componentDidMount() {
    const { initializeInstructions, maxStepsAllowed } = this.props
    if (initializeInstructions) {
      initializeInstructions.forEach(initializeInstruction => {
        if (initializeInstruction.type === 'stepForwardUntilContainerState') {
          this.expressionContainerManager.stepForwardUntilContainerState(
            initializeInstruction.state
          )
        } else if (
          initializeInstruction.type ===
          'stepForwardUntilPreviouslyChangedExpressionState'
        ) {
          this.expressionContainerManager.stepForwardUntilPreviouslyChangedExpressionState(
            initializeInstruction.state
          )
        } else {
          this.expressionContainerManager.stepForwardMultiple(
            initializeInstruction.count
          )
        }
      })
      this.expressionContainerManager.minimumIndex = this.expressionContainerManager.currentIndex
      this.expressionContainerManager.startIndex = this.expressionContainerManager.currentIndex
      this.syncState()
    }

    if (maxStepsAllowed) {
      this.expressionContainerManager.maximumIndex =
        this.expressionContainerManager.currentIndex + maxStepsAllowed
      this.syncState()
    }
  }

  public render() {
    const {
      showControls,
      showPriorities,
      variableSize,
      disableReadyToHighlightColoring,
      containerSize
    } = this.props
    const { expressionContainerManagerState } = this.state
    return (
      <ExpressionRunnerContext.Provider
        value={{
          showPriorities,
          variableSize
        }}
      >
        <Container size={'md'} horizontalPadding={0} verticalMargin={1.75}>
          <Container
            size={containerSize}
            horizontalPadding={0}
            verticalMargin={0}
          >
            <div
              className={css`
                max-width: 100%;
              `}
            >
              <div
                className={css`
                  line-height: ${lineHeights(1.3, { ignoreLocale: true })};
                `}
              >
                <ExpressionReadyToHighlightContext.Provider
                  value={{
                    readyToHighlight: expressionContainerManagerState.isDone,
                    disableReadyToHighlightColoring
                  }}
                >
                  <AlphaConvertContext.Provider
                    value={{
                      conflictingVariableNames:
                        expressionContainerManagerState.expressionContainer
                          .conflictingVariableNames
                    }}
                  >
                    <ExpressionBetaReducePreviewContext.Provider
                      value={{
                        betaReducePreview: betaReducePreview(
                          expressionContainerManagerState.expressionContainer
                            .previouslyChangedExpressionState
                        )
                      }}
                    >
                      <ExpressionBox
                        expression={
                          expressionContainerManagerState.expressionContainer
                            .expression
                        }
                      />
                    </ExpressionBetaReducePreviewContext.Provider>
                  </AlphaConvertContext.Provider>
                </ExpressionReadyToHighlightContext.Provider>
              </div>
            </div>
          </Container>
          <Container
            size={containerSize === 'xxs' ? 'xs' : 'sm'}
            horizontalPadding={0}
            verticalMargin={0}
          >
            {showControls && (
              <ExpressionRunnerExplanation
                expressionContainer={
                  expressionContainerManagerState.expressionContainer
                }
                isDone={expressionContainerManagerState.isDone}
                currentStep={expressionContainerManagerState.currentStep}
                currentSubstep={expressionContainerManagerState.currentSubstep}
              />
            )}
          </Container>
          <Container
            size={containerSize}
            horizontalPadding={0}
            verticalMargin={0}
          >
            {showControls && (
              <div ref={this.controlsRef}>
                <ExpressionRunnerControls
                  onNextClick={this.stepForward}
                  onPreviousClick={this.stepBackward}
                  canStepForward={
                    expressionContainerManagerState.canStepForward
                  }
                  canStepBackward={
                    expressionContainerManagerState.canStepBackward
                  }
                  isDone={expressionContainerManagerState.isDone}
                />
              </div>
            )}
          </Container>
        </Container>
      </ExpressionRunnerContext.Provider>
    )
  }

  private stepForward = () => {
    this.step('forward')
  }

  private stepBackward = () => {
    this.step('backward')
  }

  private step(direction: 'forward' | 'backward') {
    const previousOffsetTop = this.controlsRef.current!.offsetTop
    if (direction === 'forward') {
      this.expressionContainerManager.stepForward()
    } else {
      this.expressionContainerManager.stepBackward()
    }
    this.syncState(() => {
      window.scroll(
        0,
        window.pageYOffset +
          this.controlsRef.current!.offsetTop -
          previousOffsetTop
      )
    })
  }

  private syncState(callback?: () => void) {
    this.setState(
      {
        expressionContainerManagerState: this.expressionContainerManager
          .currentState
      },
      callback
    )
  }
}
