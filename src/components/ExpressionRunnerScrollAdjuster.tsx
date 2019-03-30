import React, { Component } from 'react'
import distanceFromTop from 'src/lib/distanceFromTop'

type ExpressionRunnerScrollAdjusterProps = React.HTMLAttributes<HTMLDivElement>

export default class ExpressionRunnerScrollAdjuster extends Component<
  ExpressionRunnerScrollAdjusterProps
> {
  private divRef: React.RefObject<HTMLDivElement>

  public constructor(props: ExpressionRunnerScrollAdjusterProps) {
    super(props)
    this.divRef = React.createRef()
  }

  public getSnapshotBeforeUpdate() {
    return distanceFromTop(this.divRef.current)
  }

  public componentDidUpdate(
    _prevProps: ExpressionRunnerScrollAdjusterProps,
    _prevState: {},
    snapshot: number
  ) {
    window.scroll(
      0,
      window.pageYOffset + distanceFromTop(this.divRef.current) - snapshot
    )
  }

  public render() {
    return <div ref={this.divRef} {...this.props} />
  }
}
