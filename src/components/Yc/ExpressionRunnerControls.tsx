import { css } from 'emotion'
import React from 'react'
import styled from 'react-emotion'
import Emoji from 'src/components/Emoji'
import locale from 'src/lib/locale'
import { colors, fontSizes, radii, spaces } from 'src/lib/theme'

const Button = styled('button')`
  border-radius: ${radii(0.25)};
  border: 2px solid ${colors('indigo300')};
  background: #fff;
  color: ${colors('indigo500')};
  font-weight: bold;
  font-size: ${fontSizes(0.85)};
  padding: ${spaces(0.5)} 0;
  &:enabled {
    cursor: pointer;
  }

  &:disabled {
    color: ${colors('indigo300')};
    background: ${colors('indigo50')};
  }

  &:focus:enabled {
    box-shadow: 0 0 0 1pt ${colors('indigo300')};
    outline: none;
  }
  &:hover:enabled {
    background: ${colors('indigo50')};
  }
  &:active:enabled {
    background: ${colors('indigo100')};
  }
`

interface ExpressionRunnerControlsProps {
  canStepForward: boolean
  canStepBackward: boolean
  onNextClick: () => void
  onPreviousClick: () => void
}

const noOp = () => {
  return
}

const ExpressionRunnerControls: React.SFC<ExpressionRunnerControlsProps> = ({
  canStepForward,
  canStepBackward,
  onNextClick,
  onPreviousClick
}) => (
  <div
    className={css`
      display: flex;
      margin: ${spaces(0.75)} -2px 0 -2px;
    `}
  >
    {canStepBackward ? (
      <Button
        onClick={onPreviousClick}
        className={css`
          flex: 1;
          margin-right: ${spaces(0.25)};
        `}
      >
        <Emoji>⏪</Emoji> {locale === 'jp' ? '前へ' : 'Previous'}
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
    <Button
      onClick={canStepForward ? onNextClick : noOp}
      disabled={!canStepForward}
      className={css`
        flex: 1;
        margin-left: ${spaces(0.25)};
      `}
    >
      {canStepForward ? (
        <>
          {locale === 'jp' ? '次へ' : 'Next'} <Emoji>⏩</Emoji>
        </>
      ) : (
        <>
          <Emoji>✅</Emoji> {locale === 'jp' ? '終了' : 'Done'}
        </>
      )}
    </Button>
  </div>
)

export default ExpressionRunnerControls
