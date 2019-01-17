/** @jsx jsx */
import { css, jsx } from '@emotion/core'
export const jsxBabelFix = jsx
import React from 'react'
import CardContext, { CardContextProps } from 'src/components/CardContext'
import { Em, P } from 'src/components/ContentTags'
import h from 'src/lib/h'
import locale from 'src/lib/locale'
import { colors, lineHeights, radii, spaces } from 'src/lib/theme'

interface YesNoButtonsState {
  selection: 'default' | 'yes' | 'no'
}

interface YesNoButtonsProps {
  answer: 'yes' | 'no'
}

interface ButtonProps {
  status: 'default' | 'active' | 'inactive'
  children: React.ReactNode
  onClick: React.MouseEventHandler
}

const Button = ({ status, children, onClick }: ButtonProps) => (
  <button
    disabled={status !== 'default'}
    onClick={onClick}
    css={css`
      cursor: ${status === 'default' ? 'pointer' : 'default'};
      padding: ${spaces(0.75)} ${spaces(1)};
      border-radius: ${radii(0.5)};
      margin: 0 ${spaces(0.5)};
      border: 2px solid ${colors('grey700')};
      font-weight: bold;
      opacity: ${status === 'inactive' ? 0.5 : 1};
      background: ${status === 'active'
        ? colors('yellow100')
        : colors('white')};
      color: ${colors('grey800')};
      text-decoration: none;
      line-height: ${lineHeights(1)};
      -webkit-user-select: none;
      box-shadow: ${status === 'active'
        ? `inset 0 0 0 1px ${colors('grey700')}`
        : 'none'};

      &:focus {
        box-shadow: inset 0 0 0 1px ${colors('grey700')};
        outline: none;
      }

      &:hover,
      &:active {
        background-color: ${status === 'default'
          ? colors('yellow100')
          : status === 'active'
          ? colors('yellow100')
          : colors('white')};
      }
    `}
  >
    {children}
  </button>
)

export default class YesNoButtons extends React.Component<
  YesNoButtonsProps,
  YesNoButtonsState
> {
  public static contextType = CardContext

  public state: YesNoButtonsState = {
    selection: 'default'
  }

  public render() {
    const { selection } = this.state
    const { answer } = this.props
    const isCorrect = selection === answer
    return (
      <CardContext.Consumer>
        {({ updateColor }) => (
          <>
            {' '}
            <div
              css={css`
                text-align: center;
                margin: ${spaces(2.5)} 0
                  ${selection === 'default' ? spaces(1.5) : spaces(1)};
              `}
            >
              <Button
                status={
                  selection === 'default'
                    ? 'default'
                    : selection === 'yes'
                    ? 'active'
                    : 'inactive'
                }
                onClick={this.onButtonClick('yes', answer, updateColor)}
              >
                {h('yesNoQuizYes')}
              </Button>
              <Button
                status={
                  selection === 'default'
                    ? 'default'
                    : selection === 'no'
                    ? 'active'
                    : 'inactive'
                }
                onClick={this.onButtonClick('no', answer, updateColor)}
              >
                {h('yesNoQuizNo')}
              </Button>
            </div>
            {selection !== 'default' && (
              <>
                <P
                  css={css`
                    text-align: center;
                  `}
                >
                  <Em>
                    <strong>
                      {isCorrect
                        ? h('yesNoQuizCorrect')
                        : h('yesNoQuizIncorrect')}
                    </strong>
                    {locale === 'en' && ' '}
                    {isCorrect
                      ? h('yesNoQuizCorrectPostfix')
                      : h('yesNoQuizIncorrectPostfix', answer === 'yes')}
                  </Em>
                </P>
                <P
                  css={css`
                    text-align: center;
                  `}
                >
                  ↓{' '}
                  {locale === 'en'
                    ? 'Please continue below!'
                    : 'そのまま読み進めてみてください!'}
                </P>
              </>
            )}
          </>
        )}
      </CardContext.Consumer>
    )
  }

  private onButtonClick(
    actual: YesNoButtonsProps['answer'],
    expected: YesNoButtonsProps['answer'],
    updateColor: CardContextProps['updateColor']
  ) {
    return () => {
      if (this.state.selection === 'default') {
        this.setState({ selection: actual })
      }
      if (actual === expected && updateColor) {
        updateColor('teal')
      }
    }
  }
}
