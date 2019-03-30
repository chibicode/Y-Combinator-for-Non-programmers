import React, { Component } from 'react'
import distanceFromTop from 'src/lib/distanceFromTop'

export default class ExpressionRunnerScrollAdjuster extends Component<{}> {
  private divRef: React.RefObject<HTMLDivElement>

  public constructor(props: {}) {
    super(props)
    this.divRef = React.createRef()
  }

  public getSnapshotBeforeUpdate() {
    // Must keep track of window.pageYOffset here because it could be different after update
    return distanceFromTop(this.divRef.current) - window.pageYOffset
  }

  public componentDidUpdate(_prevProps: {}, _prevState: {}, snapshot: number) {
    window.scroll(0, distanceFromTop(this.divRef.current) - snapshot)
  }

  public render() {
    return <div ref={this.divRef} />
  }
}
