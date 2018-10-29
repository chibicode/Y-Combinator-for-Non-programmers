import { css } from 'emotion'
import React from 'react'
import Container, { ContainerProps } from 'src/components/Container'
import ExpressionBox from 'src/components/Yc/ExpressionBox'
import ExpressionRunnerContext, {
  expressionRunnerContextDefault,
  ExpressionRunnerContextProps
} from 'src/components/Yc/ExpressionRunnerContext'
import ExpressionRunnerControls from 'src/components/Yc/ExpressionRunnerControls'
import ExpressionRunnerExplanation from 'src/components/Yc/ExpressionRunnerExplanation'
import { lineHeights } from 'src/lib/theme'
import { isContainerWithState } from 'src/lib/yc/expressionContainerGuards'
import ExpressionContainerManager from 'src/lib/yc/ExpressionContainerManager'
import {
  ExpressionContainerStates,
  SteppedExpressionContainer
} from 'src/types/yc/ExpressionContainerTypes'
import { CallStates } from 'src/types/yc/ExpressionTypes'

type InitializeInstruction =
  | {
      type: 'stepForwardUntilContainerState'
      state: ExpressionContainerStates
    }
  | {
      type: 'stepForwardUntilPreviouslyChangedExpressionState'
      state: CallStates
    }
  | {
      type: 'nextIteration'
    }

interface ExpressionRunnerProps {
  expressionContainer: SteppedExpressionContainer
  hidePriorities: ExpressionRunnerContextProps['hidePriorities']
  hideControls: boolean
  hideExplanations: boolean
  variableSize: ExpressionRunnerContextProps['variableSize']
  initializeInstructions: ReadonlyArray<InitializeInstruction>
  maxStepsAllowed?: number
  lastAllowedExpressionState?: CallStates
  containerSize: ContainerProps['size']
  hideLeftMostPrioritiesExplanation: boolean
  resetIndex: boolean
}

interface ExpressionRunnerState {
  expressionContainerManagerState: ExpressionContainerManager['currentState']
}

export default class ExpressionRunner extends React.Component<
  ExpressionRunnerProps,
  ExpressionRunnerState
> {
  public static defaultProps = {
    hidePriorities: expressionRunnerContextDefault.hidePriorities,
    hideControls: false,
    hideExplanations: false,
    variableSize: expressionRunnerContextDefault.variableSize,
    initializeInstructions: [],
    containerSize: 'xxs',
    resetIndex: false,
    hideLeftMostPrioritiesExplanation: false
  }
  private expressionContainerManager: ExpressionContainerManager
  private controlsRef = React.createRef<HTMLDivElement>()

  constructor(props: ExpressionRunnerProps) {
    super(props)
    const { expressionContainer, lastAllowedExpressionState } = props
    this.expressionContainerManager = new ExpressionContainerManager({
      expressionContainer,
      lastAllowedExpressionState
    })

    this.state = {
      expressionContainerManagerState: this.expressionContainerManager
        .currentState
    }
  }

  public componentDidMount() {
    const { initializeInstructions, maxStepsAllowed, resetIndex } = this.props
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
        } else if (initializeInstruction.type === 'nextIteration') {
          this.expressionContainerManager.stepForward()
          this.expressionContainerManager.stepForwardUntilPreviouslyChangedExpressionState(
            'default'
          )
        }
      })

      if (resetIndex) {
        this.expressionContainerManager.startIndex = this.expressionContainerManager.currentIndex
      }
      this.expressionContainerManager.minimumIndex = this.expressionContainerManager.currentIndex

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
      hideControls,
      hideExplanations,
      hidePriorities,
      variableSize,
      containerSize,
      hideLeftMostPrioritiesExplanation
    } = this.props
    const { expressionContainerManagerState } = this.state
    return (
      <ExpressionRunnerContext.Provider
        value={{
          hidePriorities,
          variableSize,
          isDoneOrReady:
            isContainerWithState(
              expressionContainerManagerState.expressionContainer,
              'done'
            ) ||
            isContainerWithState(
              expressionContainerManagerState.expressionContainer,
              'ready'
            )
        }}
      >
        <Container size={'md'} horizontalPadding={0} verticalMargin={1.75}>
          <Container
            size={containerSize === 'xxs' ? 'xs' : 'sm'}
            horizontalPadding={0}
            verticalMargin={0}
          >
            {!hideExplanations && (
              <ExpressionRunnerExplanation
                expressionContainer={
                  expressionContainerManagerState.expressionContainer
                }
                isDone={isContainerWithState(
                  expressionContainerManagerState.expressionContainer,
                  'done'
                )}
                currentStep={expressionContainerManagerState.currentStep}
                currentSubstep={expressionContainerManagerState.currentSubstep}
                hideLeftMostPrioritiesExplanation={
                  hideLeftMostPrioritiesExplanation
                }
              />
            )}
          </Container>
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
                <ExpressionBox
                  expression={
                    expressionContainerManagerState.expressionContainer
                      .expression
                  }
                />
              </div>
            </div>
          </Container>
          <Container
            size={containerSize}
            horizontalPadding={0}
            verticalMargin={0}
          >
            {!hideControls && (
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
                  isDone={isContainerWithState(
                    expressionContainerManagerState.expressionContainer,
                    'done'
                  )}
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
