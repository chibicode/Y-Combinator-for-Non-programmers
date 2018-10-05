import { css } from 'emotion'
import React from 'react'
import styled from 'react-emotion'
import Emoji from 'src/components/Emoji'
import locale from 'src/lib/locale'
import { colors, fontSizes, radii, spaces } from 'src/lib/theme'

const Button = styled('button')`
  border-radius: ${radii(0.25)};
  border: 2px solid ${colors('indigo300')};
  background: ${colors('indigo50')};
  color: ${colors('indigo500')};
  font-weight: bold;
  font-size: ${fontSizes(0.85)};
  padding: ${spaces(0.5)} 0;

  &:focus {
    box-shadow: 0 0 0 1pt ${colors('indigo500')};
    outline: none;
  }
  &:hover {
    background: #fff;
  }
  &:active {
    background: ${colors('indigo50')};
  }
`

interface ExpressionRunnerControlsProps {
  onNextClick: () => void
  onPreviousClick: () => void
}

const ExpressionRunnerControls: React.SFC<ExpressionRunnerControlsProps> = ({
  onNextClick,
  onPreviousClick
}) => (
  <div
    className={css`
      display: flex;
      margin: ${spaces(0.75)} -2px 0 -2px;
    `}
  >
    <Button
      onClick={onPreviousClick}
      className={css`
        flex: 1;
        margin-right: ${spaces(0.25)};
      `}
    >
      <Emoji>⏪</Emoji> {locale === 'jp' ? '前へ' : 'Previous'}
    </Button>
    <Button
      onClick={onNextClick}
      className={css`
        flex: 1;
        margin-left: ${spaces(0.25)};
      `}
    >
      {locale === 'jp' ? '次へ' : 'Next'} <Emoji>⏩</Emoji>
    </Button>
  </div>
)

export default ExpressionRunnerControls
