// Inspired by https://github.com/ZxMYS/react-twemoji
import isEqual from 'lodash/isEqual'
import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'react-emotion'
import Twemoji from 'twemoji'

const Span = styled('span')`
  > .emoji {
    height: 1em;
    width: 1em;
    vertical-align: -0.05em;
  }
`

interface TwemojiProps {
  options: {}
}

class TwemojiContainer extends React.Component<TwemojiProps, {}> {
  public parse() {
    Twemoji.parse(ReactDOM.findDOMNode(this), this.props.options)
  }

  public componentDidUpdate(prevProps: TwemojiProps) {
    if (!isEqual(this.props, prevProps)) {
      this.parse()
    }
  }

  public componentDidMount() {
    this.parse()
  }

  public render() {
    return <Span>{this.props.children}</Span>
  }
}

const Emoji: React.SFC<{ children: React.ReactNode }> = ({ children }) => (
  <TwemojiContainer
    options={{
      folder: 'svg',
      ext: '.svg'
    }}
  >
    {children}
  </TwemojiContainer>
)

export default Emoji
