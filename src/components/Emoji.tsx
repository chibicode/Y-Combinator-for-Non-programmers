// Inspired by https://github.com/ZxMYS/react-twemoji
import { css } from 'emotion'
import isEqual from 'lodash/isEqual'
import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'react-emotion'
import Twemoji from 'twemoji'

const Span = styled('span')`
  > .emoji {
  }
`

interface TwemojiProps {
  options: {}
  size: 'md' | 'lg'
}

interface EmojiProps {
  children: React.ReactNode
  size?: 'md' | 'lg'
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
    return (
      <Span
        className={css`
          & > .emoji {
            height: ${this.props.size === 'lg' ? '2em' : '1em'};
            width: ${this.props.size === 'lg' ? '2em' : '1em'};
            vertical-align: top;
            transform: translateY(
              ${this.props.size === 'lg' ? '-0.25em' : '0.25em'}
            );
          }
        `}
      >
        {this.props.children}
      </Span>
    )
  }
}

const Emoji: React.SFC<EmojiProps> = ({ children, size = 'md' }) => (
  <TwemojiContainer
    size={size}
    options={{
      folder: 'svg',
      ext: '.svg'
    }}
  >
    {children}
  </TwemojiContainer>
)

export default Emoji
