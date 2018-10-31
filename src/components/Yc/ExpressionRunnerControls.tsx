import { css, cx } from 'emotion'
import React from 'react'
import ButtonWithTouchActiveStates from 'src/components/ButtonWithTouchActiveStates'
import h from 'src/lib/h'
import { colors, fontSizes, radii, spaces } from 'src/lib/theme'

const Button: React.SFC<JSX.IntrinsicElements['button']> = ({
  className,
  // Remove ref b/c it's HOC
  ref,
  ...props
}) => (
  <ButtonWithTouchActiveStates
    {...props}
    activeBackgroundColor={colors('indigo100')}
    className={cx(
      css`
        border-radius: ${radii(0.25)};
        border: 2px solid ${colors('indigo300')};
        background: #fff;
        color: ${colors('indigo500')};
        font-size: ${fontSizes(0.85)};
        padding: ${spaces(0.5)} 0;
        &:enabled {
          cursor: pointer;
        }

        &:disabled,
        &:active:disabled {
          color: ${colors('indigo300')};
          background: ${colors('indigo50')};
        }

        @media (hover: hover) {
          &:hover:enabled {
            background: ${colors('indigo50')};
          }
          &:focus {
            box-shadow: inset 0 0 0 1px ${colors('indigo300')};
            outline: none;
          }
        }
        &:active:enabled {
          background: ${colors('indigo100')};
        }
      `,
      className
    )}
  />
)

interface ExpressionRunnerControlsProps {
  canStepForward: boolean
  canStepBackward: boolean
  isDone: boolean
  isPlaying: boolean
  hasPlayButton: boolean
  onNextClick: () => void
  onPreviousClick: () => void
  onAutoClick: () => void
  onPauseClick: () => void
  onResetClick: () => void
}

const noOp = () => {
  return
}

const ExpressionRunnerControls: React.SFC<ExpressionRunnerControlsProps> = ({
  canStepForward,
  canStepBackward,
  onNextClick,
  onPreviousClick,
  hasPlayButton,
  isPlaying,
  onAutoClick,
  onPauseClick,
  onResetClick,
  isDone
}) => (
  <div
    className={css`
      display: flex;
      margin: ${spaces(0.75)} -2px 0 -2px;
    `}
  >
    {!isPlaying && canStepBackward ? (
      <Button
        onClick={onPreviousClick}
        className={css`
          flex: 1;
          margin-right: ${spaces(0.25)};
        `}
      >
        {h('ycPrevious')}
      </Button>
    ) : (
      <div
        className={css`
          flex: 1;
          margin-right: ${spaces(0.25)};
          /* Same border as the button */
          border: 2px solid transparent;
        `}
      />
    )}
    {hasPlayButton &&
      (canStepForward || isDone ? (
        <Button
          onClick={
            canStepForward
              ? isPlaying
                ? onPauseClick
                : onAutoClick
              : onResetClick
          }
          className={cx(
            css`
              flex: 1;
              margin-left: ${spaces(0.25)};
              margin-right: ${spaces(0.25)};
            `,
            {
              [css`
                background: ${colors('yellow100')};
              `]: canStepForward && !isPlaying,
              [css`
                background: ${colors('pink50')};
              `]: !canStepForward
            }
          )}
        >
          {canStepForward
            ? isPlaying
              ? h('ycPause')
              : h('ycAutoPlay')
            : h('ycReset')}
        </Button>
      ) : (
        <div
          className={css`
            flex: 1;
            margin-left: ${spaces(0.25)};
            /* Same border as the button */
            border: 2px solid transparent;
          `}
        />
      ))}
    {!isPlaying && (canStepForward || isDone) ? (
      <Button
        onClick={canStepForward ? onNextClick : noOp}
        disabled={!canStepForward}
        className={css`
          flex: 1;
          margin-left: ${spaces(0.25)};
        `}
      >
        {canStepForward ? h('ycNext') : h('ycDone')}
      </Button>
    ) : (
      <div
        className={css`
          flex: 1;
          margin-left: ${spaces(0.25)};
          /* Same border as the button */
          border: 2px solid transparent;
        `}
      />
    )}
  </div>
)

export default ExpressionRunnerControls
