import { withRouter, WithRouterProps } from 'next/router'
import React from 'react'
import GlobalContext, {
  globalContextDefault
} from 'src/components/GlobalContext'

interface GlobalContextProviderProps {
  children: React.ReactNode
}

type GlobalContextProviderState = typeof globalContextDefault

class GlobalContextProvider extends React.Component<
  GlobalContextProviderProps & WithRouterProps,
  GlobalContextProviderState
> {
  public state = {
    initialRender: true
  }

  public componentDidMount() {
    this.props.router.events.on('routeChangeComplete', this.handleRouteChange)
  }

  public componentWillUnmount() {
    this.props.router.events.off('routeChangeComplete', this.handleRouteChange)
  }

  public render() {
    return (
      <GlobalContext.Provider value={this.state}>
        {this.props.children}
      </GlobalContext.Provider>
    )
  }

  private handleRouteChange = () => {
    this.setState({ initialRender: false })
  }
}

export default withRouter<GlobalContextProviderProps>(GlobalContextProvider)
