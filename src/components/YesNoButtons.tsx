/** @jsx jsx */
import { css, jsx } from '@emotion/core'
export const jsxBabelFix = jsx
import React from 'react'
// import Emoji from 'src/components/Emoji'
import h from 'src/lib/h'
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
      border: 2px solid ${colors('deepOrange900')};
      font-weight: bold;
      opacity: ${status === 'inactive' ? 0.5 : 1};
      background: ${status === 'active'
        ? colors('yellow100')
        : colors('white')};
      color: ${colors('deepOrange900')};
      text-decoration: none;
      line-height: ${lineHeights(1)};
      -webkit-user-select: none;
      box-shadow: ${status === 'active'
        ? `inset 0 0 0 1px ${colors('deepOrange900')}`
        : 'none'};

      &:focus {
        box-shadow: inset 0 0 0 1px ${colors('deepOrange900')};
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
  public state: YesNoButtonsState = {
    selection: 'default'
  }

  public render() {
    const { selection } = this.state
    return (
      <div
        css={css`
          text-align: center;
          margin: ${spaces(2.5)} 0 ${spaces(1.5)};
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
          onClick={this.onYesClick}
        >
          {h('quizYes')}
        </Button>
        <Button
          status={
            selection === 'default'
              ? 'default'
              : selection === 'no'
              ? 'active'
              : 'inactive'
          }
          onClick={this.onNoClick}
        >
          {h('quizNo')}
        </Button>
      </div>
    )
  }

  private onYesClick = () => {
    if (this.state.selection === 'default') {
      this.setState({ selection: 'yes' })
    }
  }

  private onNoClick = () => {
    if (this.state.selection === 'default') {
      this.setState({ selection: 'no' })
    }
  }
}
