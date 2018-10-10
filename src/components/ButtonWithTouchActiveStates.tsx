import { css, cx } from 'emotion'
import React from 'react'

type ButtonWithTouchActiveStatesProps<
  T = JSX.IntrinsicElements['button']
> = T & {
  activeBackgroundColor: string
}

interface ButtonWithTouchActiveStatesState {
  isActive: boolean
}

export default class ButtonWithTouchActiveStates extends React.Component<
  ButtonWithTouchActiveStatesProps,
  ButtonWithTouchActiveStatesState
> {
  public state = {
    isActive: false
  }

  public render() {
    const { className, activeBackgroundColor, ...props } = this.props
    return (
      <button
        {...props}
        className={cx(className, {
          [css`
            background: ${activeBackgroundColor} !important;
          `]: this.state.isActive
        })}
        onTouchStart={this.activate}
        onTouchEnd={this.deactivate}
        onTouchCancel={this.deactivate}
      />
    )
  }

  private activate = () => {
    if (!this.props.disabled) {
      this.setState({ isActive: true })
    }
  }

  private deactivate = () => {
    this.setState({ isActive: false })
  }
}
